import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import UserBox from './components/UserBox';
import HomeScreen from './pages/Home';
import PersonalInfoScreen from './pages/PersonalInfo';
import Routes from './pages/routes';
import SignInScreen from './pages/SignIn';
import SignUpScreen from './pages/SignUp';
import NewPageScreen from './pages/Test';



export default function App() {
const Stack = createNativeStackNavigator()
return(
  <NavigationContainer>
  <Stack.Navigator >
    <Stack.Screen name="Home" options={{ headerShown: false }} component={SignInScreen} />
    <Stack.Screen name="Entry" options={{ headerShown: false }} component={Routes} />
    <Stack.Screen name="Test" component={HomeScreen} />
    <Stack.Screen name="Add Customer" component={SignUpScreen} />
    <Stack.Screen name="Personal Info" component={PersonalInfoScreen} options={{ headerShown: false }} />



  </Stack.Navigator>
</NavigationContainer>)

};
