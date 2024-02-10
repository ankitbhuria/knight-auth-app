import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {ThemeProvider} from "react-native-rapi-ui"
import AppNavigator from "./src/AppNavigator/AppNavigator.js"
import { AuthProvider } from './src/AuthContext/AuthProvider.js';
export default function App() {
  return (
    <ThemeProvider theme='light'>
      <AuthProvider>
      <AppNavigator />
      </AuthProvider>
      
    </ThemeProvider>
  );
}
