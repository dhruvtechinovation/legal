import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Ensure to install this package if not yet done

const SearchBar = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={24} color="#888" />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={value}
        onChangeText={onChange}
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 40,
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 10,
    elevation: 3, // Add shadow effect on Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
});

export default SearchBar;