  //   export default Chat;
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import axios from "axios";

interface ChatProps {
  onClose: () => void;
  resetChat?: boolean;
}

const Chat: React.FC<ChatProps> = ({ onClose, resetChat = false }) => {
  const [messages, setMessages] = useState<
    {
      [x: string]: any;
      text: string;
      sender: "bot" | "user";
      type?: "text" | "options" | "consent";
    }[]
  >([]);
  const [inputText, setInputText] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  const botConversation = [
    { question: "Hi! Welcome to our legal assistance chat. May I know your name?", type: "text", key: "name", isConsentStep: false },
    { question: `Nice to meet you,${inputText}! Could you please share your contact number?`, type: "text", key: "phone", isConsentStep: false },
    { question: "Got it! Lastly, may I know your location?", type: "text", key: "location", isConsentStep: false },
    { question: "Based on your concern, please select the legal category that best fits your issue:", type: "options", key: "category", options: ["Family", "Criminal", "Labour", "Crime"], isConsentStep: false },
    { question: "Please briefly describe your legal issue.", type: "text", key: "issue", isConsentStep: false },
    { question: "Before we proceed, we need your consent to store this information securely for assistance. Do you agree?", type: "consent", key: "consent", isConsentStep: true },
  ];

  useEffect(() => {
    if (resetChat) {
      setMessages([]);
      setCurrentStep(0);
      setUserData({});
    } else {
      setMessages([{ text: botConversation[0].question, sender: "bot" }]);
    }
  }, [resetChat]);

  useEffect(() => {
    if (flatListRef.current && messages.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const sendMessage = () => {
    if (inputText.trim().length === 0) return;

    setMessages([...messages, { text: inputText, sender: "user" }]);

    const currentQuestion = botConversation[currentStep];
    setUserData({ ...userData, [currentQuestion.key]: inputText });

    if (currentStep < botConversation.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      const nextQuestion = botConversation[nextStep];

      let botMessage = nextQuestion.question;
      if (nextQuestion.question.includes("[name]")) {
        botMessage = nextQuestion.question.replace("[name]", "");
      }

      if (nextQuestion.type === "options") {
        setMessages((prev) => [
          ...prev,
          {
            text: botMessage,
            sender: "bot",
            type: "options",
            options: nextQuestion.options,
          },
        ]);
      } else if (nextQuestion.isConsentStep) {
        setMessages((prev) => [
          ...prev,
          { text: botMessage, sender: "bot", type: "consent" },
        ]);
      } else {
        setMessages((prev) => [...prev, { text: botMessage, sender: "bot" }]);
      }
    } else {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thank you for providing the information. We will get back to you soon.",
          sender: "bot",
        },
      ]);
      console.log("User Data:", userData);
    }
    setInputText("");
  };

  const selectOption = (option: string) => {
    setUserData({ ...userData, category: option });
    setMessages([...messages, { text: option, sender: "user" }]);

    if (currentStep < botConversation.length - 1) {
      let nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      let nextQuestion = botConversation[nextStep];

      if (nextQuestion && nextQuestion.type === "options") {
        setMessages((prev) => [
          ...prev,
          {
            text: nextQuestion.question,
            sender: "bot",
            type: "options",
            options: nextQuestion.options,
          },
        ]);
      } else if (nextQuestion && nextQuestion.isConsentStep) {
        setMessages((prev) => [
          ...prev,
          { text: nextQuestion.question, sender: "bot", type: "consent" },
        ]);
      } else if (nextQuestion) {
        setMessages((prev) => [
          ...prev,
          { text: nextQuestion.question, sender: "bot" },
        ]);
      }
    }
  };

  const handleConsent = async (consent: boolean) => {
    setUserData({ ...userData, consent: consent.toString() });
    setMessages([...messages, { text: consent ? "I Consent" : "I Don't Consent", sender: "user" }]);

    const currentQuestion = botConversation[currentStep];

    if (currentQuestion.isConsentStep) {
      if (consent) {
        setIsLoading(true);
        try {
          const response = await axios.post("http://192.168.9.179:3000/api/store", userData);
          console.log("Data successfully sent:", response.data);
          setMessages((prev) => [
            ...prev,
            {
              text: "Thank you for your consent. We have recorded your details and will contact you soon.",
              sender: "bot",
            },
          ]);
        } catch (error) {
          console.error("Error sending data:", error);
          setMessages((prev) => [
            ...prev,
            {
              text: "There was an issue submitting your data. Please try again later.",
              sender: "bot",
            },
          ]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setMessages((prev) => [
          ...prev,
          {
            text: "Thank you for providing the information. We will get back to you soon.",
            sender: "bot",
          },
        ]);
        onClose();
      }
    } else {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      const nextQuestion = botConversation[nextStep];
      setMessages((prev) => [...prev, { text: nextQuestion.question, sender: "bot" }]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {isMinimized ? (
        <TouchableOpacity style={styles.minimizedButton} onPress={() => setIsMinimized(false)}>
          <MaterialIcons name="message" size={24} color="white" />
        </TouchableOpacity>
      ) : (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.chatBox}>
          <View style={styles.chatHeader}>
            <Text style={styles.chatTitle}>Chat</Text>
            <View style={styles.headerButtons}>
              <TouchableOpacity onPress={() => setIsMinimized(true)} style={styles.headerIcon}>
                <MaterialIcons name="keyboard-arrow-down" size={22} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={onClose} style={styles.headerIcon}>
                <MaterialIcons name="close" size={22} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.messageContainer,
                  item.sender === "user" ? styles.userMessage : styles.botMessage,
                ]}
              >
                <Text style={styles.messageText}>{item.text}</Text>

                {item.type === "options" && (
                  <View style={styles.optionButtonsContainer}>
                    {item.options.map((option) => (
                      <TouchableOpacity
                        key={option}
                        style={styles.optionButton}
                        onPress={() => selectOption(option)}
                      >
                        <Text style={styles.optionText}>{option}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}

                {item.type === "consent" && (
                  <View style={styles.consentButtons}>
                    <TouchableOpacity
                      style={styles.consentButton}
                      onPress={() => handleConsent(true)}
                    >
                      <Text style={styles.optionText}>I Consent</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.consentButton, { backgroundColor: "#EF4444" }]}
                      onPress={() => handleConsent(false)}
                    >
                      <Text style={styles.optionText}>I Don't Consent</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            )}
            style={styles.messageList}
            contentContainerStyle={{ paddingBottom: 200 }}
          />

          {currentStep < botConversation.length && (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Type a message..."
                value={inputText}
                onChangeText={setInputText}
                multiline={true}
              />
              <Text style={styles.wordCount}>
                {inputText.trim().split(/\s+/).length}/100
              </Text>
              <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                <MaterialIcons name="send" size={24} color="white" />
              </TouchableOpacity>
            </View>
          )}

          {isLoading && (
            <View style={styles.loadingOverlay}>
              <ActivityIndicator size="large" color="#3B82F6" />
            </View>
          )}
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 100,
  },
  minimizedButton: {
    backgroundColor: "black",
    padding: 12,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  chatBox: {
    width: 350,
    height: 500,
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  chatHeader: {
    backgroundColor: "black",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chatTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  headerButtons: {
    flexDirection: "row",
  },
  headerIcon: {
    marginLeft: 16,
  },
  messageList: {
    flex: 1,
    padding: 16,
  },
  messageContainer: {
    padding: 12,
    marginVertical: 4,
    borderRadius: 16,
    maxWidth: "80%",
  },
  userMessage: {
    backgroundColor: "#3B82F6",
    alignSelf: "flex-end",
    borderBottomRightRadius: 4,
  },
  botMessage: {
    backgroundColor: "#F3F4F6",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
    color: "#1F2937",
    lineHeight: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#F9FAFB",
  },
  textInput: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 12,
    backgroundColor: "#E5E7EB",
    fontSize: 16,
    color: "#1F2937",
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 20,
  },
  optionButtonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  optionButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
  optionText: {
    color: "white",
    textAlign: "center",
  },
  consentButtons: {
    flexDirection: "row",
    marginTop: 10,
  },
  consentButton: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  wordCount: {
    position: "absolute",
    right: 60,
    bottom: 10,
    color: "gray",
    fontSize:12,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Chat;