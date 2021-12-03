import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BeratungsfelderScreen from "./Beratungsfelder";
import HomeScreen from "./Home";
import SignUpScreen from "./SignUp";
import NewPageScreen from "./Test";
import VertrasubersichtScreen from "./Vertragsübersicht";
const Routes = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      options={{ headerShown: false }}
      screenOptions={{
        tabBarStyle: { display: "none" },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen}  />
      <Tab.Screen name="NewPage" component={NewPageScreen} />
    <Tab.Screen name="Vertragsübersicht" component={VertrasubersichtScreen}options={{ headerShown: false }} />
    <Tab.Screen name="Beratungsfelder" component={BeratungsfelderScreen}options={{ headerShown: false }} />
      {/* <Tab.Screen name="SignUp" component={SignUpScreen} /> */}
    </Tab.Navigator>
  );
};

export default Routes;
