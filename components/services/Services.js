import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Import icons

const services = [
  {
    id: "1",
    title: "Legal Consultation",
    description: "Get expert legal help",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2950/2950761.png",
  },
  {
    id: "2",
    title: "Document Drafting",
    description: "Track case progress",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3076/3076743.png",
  },
  {
    id: "3",
    title: "Court Representation",
    description: "Search for top lawyers",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3076/3076743.png",
  },
  {
    id: "4",
    title: "Contract Review",
    description: "Access police records",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  // {
  //   id: "5",
  //   title: "Case Filing",
  //   description: "File cases online",
  //   iconUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  // },
];

const ServiceGrid = () => {
  const scaleValues = useRef(services.map(() => new Animated.Value(1))).current;
  const arrowOpacity = useRef(services.map(() => new Animated.Value(1))).current;

  const handlePressIn = (index) => {
    Animated.parallel([
      Animated.spring(scaleValues[index], { toValue: 0.95, useNativeDriver: true }),
      Animated.timing(arrowOpacity[index], { toValue: 2, duration: 300, useNativeDriver: true }),
    ]).start();
  };

  const handlePressOut = (index) => {
    Animated.parallel([
      Animated.spring(scaleValues[index], { toValue: 1, useNativeDriver: true }),
      Animated.timing(arrowOpacity[index], { toValue: 1, duration: 300, useNativeDriver: true }),
    ]).start();
  };

  // Ensure even number of items by adding a placeholder if needed
  const adjustedServices =
    services.length % 2 === 1 ? [...services, { id: "placeholder" }] : services;

  const renderItem = ({ item, index }) => {
    if (item.id === "placeholder") {
      return <View style={[styles.card, { backgroundColor: "transparent", elevation: 0 }]} />;
    }

    return (
      <Animated.View style={[styles.card, { transform: [{ scale: scaleValues[index] }] }]}>
        <TouchableOpacity
          onPress={() => alert(`You clicked on ${item.title}`)}
          onPressIn={() => handlePressIn(index)}
          onPressOut={() => handlePressOut(index)}
          style={styles.cardContent}
        >
          {/* Animated Arrow Icon */}
          <Animated.View style={[styles.arrowIcon, { opacity: arrowOpacity[index] }]}>
            <MaterialIcons name="arrow-forward-ios" size={18} color="#555" />
          </Animated.View>

          {/* Icon */}
          <View style={styles.iconContainer}>
            <Image source={{ uri: item.iconUrl }} style={styles.image} />
          </View>

          {/* Text Content */}
          <View style={styles.textArea}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={adjustedServices}
        keyExtractor={(item) => item.id}
        numColumns={2} // Grid Layout
        renderItem={renderItem}
        contentContainerStyle={styles.grid}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  grid: {
    padding: 16,
    justifyContent: "center",
  },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: "#f5f5f5",
    borderRadius: 16,
    elevation: 4, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    aspectRatio: 1, // Square shape
  },
  cardContent: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  arrowIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  iconContainer: {
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  textArea: {
    marginTop: "auto",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});

export default ServiceGrid;
