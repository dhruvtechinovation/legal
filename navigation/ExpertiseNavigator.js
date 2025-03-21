import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./Appnavigator"; // Your Bottom Tabs
import AboutUs from "../components/AboutUs"; // Import About Us Screen
import ExpertiseGrid from "../components/Expertise/Expertise";
import ExpertiseDetail from "../components/Expertise/ExpertiseDetails";
const Stack = createStackNavigator();
const AppNavigation = () => {
return (
<NavigationContainer>
<Stack.Navigator>
{/* Bottom Tabs as the Main Screen */}
{/* About Us as a Separate Screen */}
<Stack.Screen name="AboutUs" component={AboutUs} />
<Stack.Screen name="Expertise" component={ExpertiseGrid } />
<Stack.Screen name="ExpertiseDetail" component={ExpertiseDetail} options={{ title: 'Expertise Detail' }} />
</Stack.Navigator>
</NavigationContainer>
);
};

export default AppNavigation