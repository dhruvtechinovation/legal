import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";

const expertiseAreas = [
  { id: "1", title: "Family", description: "Expertise in family-related legal matters." },
  { id: "2", title: "Corporate", description: "Guidance on corporate governance and compliance." },
  { id: "3", title: "Criminal", description: "Defense and prosecution of criminal cases." },
  { id: "4", title: "Labour", description: "Advising on employment and labor relations." },
];

// Ensure even number of items by adding a placeholder if needed
const adjustedExpertise =
  expertiseAreas.length % 2 === 1 ? [...expertiseAreas, { id: "placeholder" }] : expertiseAreas;

const ExpertiseGrid = () => {
  const navigation = useNavigation();
  const animatedValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const blinkAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: 0.3,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    blinkAnimation();
  }, [animatedValue]);

  const renderExpertiseCard = ({ item }) => {
    if (item.id === "placeholder") {
      return <View style={[styles.card, { backgroundColor: "transparent", elevation: 0 }]} />;
    }

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("ExpertiseDetail", { expertise: item.title })}
      >
        <Animated.View style={[styles.cardContent, { opacity: animatedValue }]}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={adjustedExpertise}
        renderItem={renderExpertiseCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
  },
  cardContent: {
    flex: 1,
  },
});

export default ExpertiseGrid;
