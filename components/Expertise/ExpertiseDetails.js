import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  Card, Divider, IconButton } from "react-native-paper"; 

const ExpertiseDetail = ({ route }) => {
  const { expertise } = route.params; // Get expertise data passed from the card

  const caseStatistics = {
    Family: { // Ensure these match the titles passed
      casesSolved: 150,
      successRate: '95%',
      testimonials: ['Client A: "Very satisfied."', 'Client B: "Highly recommend!"'],
    },
    Corporate: {
      casesSolved: 200,
      successRate: '90%',
      testimonials: ['Client C: "Excellent work."', 'Client D: "Amazing team!"'],
    },
    Criminal: {
      casesSolved: 100,
      successRate: '85%',
      testimonials: ['Client E: "Great support."', 'Client F: "Very professional!"'],
    },
    Labour: {
      casesSolved: 120,
      successRate: '88%',
      testimonials: ['Client G: "Helpful advice."', 'Client H: "Would recommend!"'],
    },
  };

  // Ensure the expertise key matches the caseStatistics keys
  const stats = caseStatistics[expertise.replace(/ /g,'')] || null; // Remove spaces if any (for safety)

  // Check if stats is defined before rendering
  if (!stats) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Expertise not found</Text>
        <Text style={styles.subtitle}>No data available for the selected expertise.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expertise in {expertise.replace(/([A-Z])/g, ' $1')}</Text>
      <Text style={styles.subtitle}>Cases Solved: {stats.casesSolved}</Text>
      <Text style={styles.subtitle}>Success Rate: {stats.successRate}</Text>
      <Text style={styles.subtitle}>Client Testimonials:</Text>
      {stats.testimonials.map((testimonial, index) => (
        <Text key={index} style={styles.testimonial}>- {testimonial}</Text>
      ))}
      <Text style={styles.subtitle}>Contact Us</Text>
      <Card style={styles.card}>
        <Card.Content>
          <Text>Email: support@lawsuvidha.com</Text>
          <Text>Phone: +91 9876543210</Text>
          <Text>Address: 123, Hyderabad, India</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  testimonial: {
    fontSize: 16,
    color: '#666',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#007AFF",
  },
});

export default ExpertiseDetail;