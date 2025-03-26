import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from "./navigation/Appnavigator";
import { Provider as PaperProvider } from "react-native-paper";
import AppNavigation from './navigation/Appnavigation';


export default function App() {
  return (
    <PaperProvider>
   <AppNavigation/>
    </PaperProvider>

  );
}


