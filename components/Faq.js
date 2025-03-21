import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';

const FAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      "question": "What services do you offer?",
      "answer": "We provide access to qualified lawyers for consultations, legal advice, document review, and representation in various legal matters such as criminal, family, corporate, and more."
    },
    {
      "question": "How do I book a lawyer?",
      "answer": "Simply enter your legal issue, and we'll match you with a qualified lawyer available in your area. You can then schedule a consultation at your convenience."
    },
    {
      "question": "How much does it cost to consult a lawyer?",
      "answer": "The consultation fees depend on the lawyer’s expertise and the nature of the case. You will be provided with an estimate before you book a session."
    },
    {
      "question": "Is the consultation private and confidential?",
      "answer": "Yes, all your information and conversations with our lawyers are strictly confidential, protected by attorney-client privilege."
    },
    {
      "question": "How do I know if the lawyer is qualified?",
      "answer": "We only work with certified and experienced lawyers who specialize in various legal fields. Each lawyer's credentials are verified before they can offer services through our platform."
    },
    {
      "question": "Can I get legal advice online?",
      "answer": "Yes! You can chat with a lawyer online or book a video consultation. We make it convenient for you to access legal help remotely."
    },
    {
      "question": "Can I change my lawyer if I’m not satisfied?",
      "answer": "Yes (we consider lawyer feedback as well), you can request a different lawyer if you feel that your current lawyer is not the right fit. We’ll assist you in making a new match."
    },
    {
      "question": "What types of legal issues can I get help with?",
      "answer": "You can get legal help for a wide variety of issues, including family law, criminal law, business disputes, property law, employment law, and more."
    },
    {
      "question": "How do I make payment for services?",
      "answer": "Payments are processed securely through our website. You can pay via credit/debit card or other online payment methods like UPI."
    },
    {
      "question": "How long will it take to get a response from a lawyer?",
      "answer": "Once you submit your query, you will be matched with a lawyer in real time. Typically, you will receive a response within two hours, depending on availability."
    },
    {
      "question": "Are the lawyers available 24/7?",
      "answer": "While not all lawyers are available 24/7 (depends on jurisdiction and police station limits), our platform provides access to lawyers at different hours, ensuring you can get legal help when you need it most."
    },
    {
      "question": "Can I get help with document drafting or contract review?",
      "answer": "Yes! We offer services like document review, contract drafting, and legal writing. You can send your documents for review or consult a lawyer for guidance."
    },
    {
      "question": "Do you offer services for businesses?",
      "answer": "Absolutely! We offer services tailored to businesses, such as corporate legal advice, contract management, and dispute resolution."
    },
    {
      "question": "Is there a minimum consultation fee?",
      "answer": "Consultation fees vary based on the lawyer and the nature of the legal issue. However, we ensure that the pricing is transparent and competitive."
    },
    {
      "question": "How do I cancel or reschedule an appointment?",
      "answer": "You can easily cancel or reschedule your consultation through our platform. Just visit your booking details and make the necessary changes."
    },
    {
      "question": "Can I get a lawyer for court representation?",
      "answer": "Yes (NOC required), many of our lawyers offer representation in court. Simply book a consultation, and we'll help you find a lawyer suited for court appearances."
    },
    {
      "question": "How do I know if I need a lawyer?",
      "answer": "If you're unsure whether you need a lawyer, feel free to chat with one of our experts. They'll help you assess whether legal assistance is necessary."
    },
    {
      "question": "Do you have lawyers for international legal matters?",
      "answer": "Yes (limited), we work with lawyers who specialize in international law and can assist you with cross-border legal issues."
    }
  ]
  
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqContainer}>
          <TouchableOpacity style={styles.questionContainer} onPress={() => toggleExpand(index)}>
            <Text style={styles.questionText}>{faq.question}</Text>
            <Ionicons name={expandedIndex === index ? "chevron-up" : "chevron-down"} size={24} color="black" />
          </TouchableOpacity>
          {expandedIndex === index && (
            <View style={styles.answerContainer}>
              <Text style={styles.answerText}>{faq.answer}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
    {/* Contact Section */}
    <Text style={styles.subtitle}>Contact Us</Text>
      <Card style={styles.card}>
        <Card.Content>
          <Text>Email: support@lawsuvidha.com</Text>
          <Text>Phone: +91 9876543210</Text>
          <Text>Address: 123, Hyderabad, India</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    marginTop:40
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  faqContainer: {
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2, // For Android shadow
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  questionText: {
    fontSize: 18,
    color: '#333',
  },
  answerContainer: {
    padding: 15,
    backgroundColor: '#f1f1f1',
  },
  answerText: {
    fontSize: 16,
    color: '#666',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "black",
  }, card: {
    padding: 10,
    marginBottom: 15,
    backgroundColor: "white",
    elevation: 3,
    borderRadius: 8,
  },
});

export default FAQs;