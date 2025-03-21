import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Card, Divider } from "react-native-paper";

const AboutUs = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image source={require("../assets/icon.png")} style={styles.logo} />

      {/* Title */}
      <Text style={styles.title}>About Law Suvidha</Text>

      {/* Description */}
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.description}>
            Law Suvidha is a platform that connects individuals with legal experts. 
            Whether you need legal consultation, want to find a lawyer, or require case 
            information from police stations, we make the legal process seamless and accessible.
          </Text>
        </Card.Content>
      </Card>

      <Divider style={styles.divider} />

      {/* Features Section */}
      <Text style={styles.subtitle}>Our Services</Text>
      <Card style={styles.card}>
        <Card.Content>
          <Text>✔ Find experienced lawyers by region & case type</Text>
          <Text>✔ Access police station records for legal cases</Text>
          <Text>✔ Subscription-based access for legal professionals</Text>
          <Text>✔ Secure & transparent communication</Text>
        </Card.Content>
      </Card>

      <Divider style={styles.divider} />

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

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "black",
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "justify",
  },
  card: {
    padding: 10,
    marginBottom: 15,
    backgroundColor: "white",
    elevation: 3,
    borderRadius: 8,
  },
  divider: {
    marginVertical: 15,
    height: 1,
    backgroundColor: "#DDD",
  },
});

export default AboutUs;
