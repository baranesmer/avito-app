import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeScreen from "./Home";
import SignUpScreen from "./SignUp";
import NewPageScreen from "./Test";
const Routes = ({navigation}) => {
  const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator options={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="NewPage" component={NewPageScreen} />
        {/* <Tab.Screen name="SignUp" component={SignUpScreen} /> */}
      </Tab.Navigator>
  );
};


export default Routes;