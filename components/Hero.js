import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const HeroSection = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Unknown.png")}
        style={styles.image}
      />
       <Text style={styles.welcomeText}>Welcome to Law Suvidha!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: 360,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
  },
});

export default HeroSection;
