import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, Text } from "react-native";
import { Appbar, Card, Button, Divider } from "react-native-paper";
import Chat from "../components/Chat";
import { Ionicons } from "@expo/vector-icons";
import HeroSection from "../components/Hero";
import CardSlider from "../components/Expertise/Expertise";
import AboutUs from "../components/AboutUs";
import Services from "../components/services/Services";
import ReviewCarousel from "../components/reviews";
import Onboarding from "../components/Onboarding";
import SearchBar from "../components/Searchbar"; // Import the SearchBar component

const HomeScreen = ({ navigation }) => {
  const [showChat, setShowChat] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [resetChat, setResetChat] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State for search input

  const openChat = () => {
    setShowChat(true);
    setIsMinimized(false);
    setResetChat(false);
  };

  const closeChat = () => {
    setShowChat(false);
    setResetChat(true);
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const restoreChat = () => {
    setIsMinimized(false);
  };

  const handleSearchChange = (text) => {
    setSearchQuery(text);
    // Implement search logic as needed
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Law Suvidha" titleStyle={styles.appbarTitle} />
      </Appbar.Header>
      
      {/* Search Bar */}

      <ScrollView contentContainerStyle={styles.content}>
      <SearchBar value={searchQuery} onChange={handleSearchChange} />
        <HeroSection />
        <Divider style={styles.divider} />
        <Text style={styles.sectionTitle}>Our Services</Text>
        <Services />
        <Divider style={styles.divider} />
        <Text style={styles.sectionTitle}>Expertise You Can Trust</Text>
        <CardSlider />
        <Divider style={styles.divider} />
        <Text style={styles.sectionTitle}>Testimonials</Text>
        <ReviewCarousel />
        <Divider style={styles.divider} />
        <Button mode="contained" onPress={() => navigation.navigate("AboutUs")}>
          About Us
        </Button>
      </ScrollView>

      {/* Floating Chat Button (Default) */}
      {!showChat && !isMinimized && (
        <TouchableOpacity style={styles.chatButton} onPress={openChat}>
          <Ionicons name="chatbubble-outline" size={24} color="white" />
        </TouchableOpacity>
      )}

      {/* Minimized Button */}
      {isMinimized && (
        <TouchableOpacity style={styles.minimizedButton} onPress={restoreChat}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      )}

      {/* Chat Window */}
      {showChat && !isMinimized && (
        <Chat onClose={closeChat} onMinimize={minimizeChat} resetChat={resetChat} />
      )}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "white",
  },
  appbarTitle: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "sansfrans",
    textAlign: "center",
  },
  content: {
    padding: 10,
  },
  divider: {
    marginVertical: 10,
    height: 1,
    backgroundColor: "#DDD",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 2,
  },
  chatButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "black",
    padding: 12,
    borderRadius: 25,
    elevation: 5,
  },
  minimizedButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 25,
    elevation: 5,
  },
});

export default HomeScreen;