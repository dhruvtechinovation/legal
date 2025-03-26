import React from "react";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";
import Login from "./Login";
import { useNavigation } from "@react-navigation/native";
const Account=()=>
{
  const navigation=useNavigation()
    return(
    <View style={styles.container}>
        <TouchableOpacity><Text onPress={()=>navigation.navigate('login')}>login</Text></TouchableOpacity>
        

    </View>
    )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})
export default Account