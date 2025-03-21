import React from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Use MaterialIcons from Expo

const ArrowIcon = () => {
  return (
    <View style={{ position: "absolute", top: 10, right: 10 }}>
      <MaterialIcons name="arrow-forward-ios" size={24} color="#555" />
    </View>
  );
};

export default ArrowIcon;
