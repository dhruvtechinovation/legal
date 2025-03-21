import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Law Suvidha" />
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#F5F5F5",
    paddingTop: 1, // Prevents it from going under status bar
  },
  header: {
    backgroundColor: "white",
    alignItems: "center",
  },
});

export default HeaderComponent;
