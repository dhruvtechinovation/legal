import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Card } from "react-native-paper";

const reviews = [
  { id: "1", name: "John Doe", review: "Amazing service! Highly recommend.", rating: 5 },
  { id: "2", name: "Sarah Lee", review: "Very professional and helpful.", rating: 4 },
  { id: "3", name: "Michael Smith", review: "Exceeded my expectations!", rating: 5 },
];

const { width } = Dimensions.get("window");

const ReviewCarousel = () => {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width * 0.8}
        height={200} // Increased the height for padding
        autoPlay
        data={reviews}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <Card style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.review}>{item.review}</Text>
              <Text style={styles.rating}>⭐ {item.rating} / 5</Text>
            </Card>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: "center", 
    marginVertical:10
  },
  cardWrapper: { 
    paddingHorizontal: 10, // Add horizontal padding for space around the card
    marginVertical: 10, // Add vertical margin to create gap between cards
  },
  card: { 
    padding: 10, 
    borderRadius: 10, 
    elevation: 3, 
    width: "100%" 
  }, 
  name: { 
    fontSize: 18, 
    fontWeight: "bold" 
  },
  review: { 
    fontSize: 16, 
    marginVertical: 10 
  },
  rating: { 
    fontSize: 14, 
    color: "gold" 
  },
});

export default ReviewCarousel;