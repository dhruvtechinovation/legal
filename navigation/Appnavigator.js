import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import Services from "../components/services/Services";
import Account from "../screens/Account";
import DrawerNavigator from "./Appnavigation";
import MyComponent from "./Appnavigation";
import ServiceCard from "../components/services/Services";
import FAQs from "../components/Faq";
import Login from "../screens/Login";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (

      <Tab.Navigator
         screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") iconName = "home";
            else if (route.name === "profile") iconName = "person";
            else if (route.name === "faqs") iconName = "briefcase";
      
            return <Ionicons name={iconName} size={size} color={color} />;
          },  
            tabBarActiveTintColor: "balck",  // Color when tab is active
            tabBarInactiveTintColor: "gray",   // Color when tab is inactive
            headerShown: false,                 // Hide the top header
          })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="faqs" component={FAQs} />
        <Tab.Screen name="profile" component={Login} />
        

      </Tab.Navigator>
    
  );
};


export default BottomTabNavigator;
