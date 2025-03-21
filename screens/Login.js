// Login.js
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation=useNavigation()

  const handleLogin = () => {
    // Here you would typically handle the login logic
    console.log("Logged in with phone number: ", phoneNumber);
    navigation.navigate('Main')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        maxLength={10} // Limit to 10 digits
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Login" onPress={handleLogin} />
      
      <TouchableOpacity onPress={() => navigation.navigate('signup')}>
        <Text style={styles.linkText}>First time user? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  linkText: {
    color: '#007AFF',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Login;