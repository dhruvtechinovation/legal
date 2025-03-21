// import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
// import HomeScreen from "../screens/HomeScreen";
// import Services from "../screens/Services";
// import Account from "../screens/Account";

// const Drawer = createDrawerNavigator();

// const DrawerNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         screenOptions={{
//           headerShown: true,  // Show the header
//           drawerActiveTintColor: "black",  // Active drawer item color
//           drawerInactiveTintColor: "gray", // Inactive drawer item color
//         }}
//       >
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Services" component={Services} />
//         <Drawer.Screen name="Profile" component={Account} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default DrawerNavigator;
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./Appnavigator"; // Your Bottom Tabs
import AboutUs from "../components/AboutUs"; // Import About Us Screen
import ExpertiseGrid from "../components/Expertise/Expertise";
import ExpertiseDetail from "../components/Expertise/ExpertiseDetails";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import Onboarding from "../components/Onboarding";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        {/* Bottom Tabs as the Main Screen */}
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        {/* About Us as a Separate Screen */}
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Expertise" component={ExpertiseGrid } />
        <Stack.Screen name="ExpertiseDetail" component={ExpertiseDetail} options={{ title: 'Expertise Detail' }} />
        <Stack.Screen name="signup" component={Signup}/>
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
