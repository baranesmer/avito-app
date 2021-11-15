import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomerSearch from "../components/CustomerSearch";
import UserBox from "../components/UserBox";
import SignUpScreen from "./SignUp";
import NewPageScreen from "./Test";
import { userBoxStyles } from "../config/styles";


const HomeScreen = ({ navigation }) => {
  const nameList = [
    { name: "Baran", lastName: "Esmer" },
    { name: "Kevin", lastName: "Schweissguth" },
    { name: "Engin", lastName: "Güngör" },

    { name: "Eren", lastName: "Düzel" },
    { name: "İbrahim", lastName: "Atılgan" },
  ];
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <CustomerSearch onPress={() => navigation.push("Add Customer")} />
      <View style={styles.container}>
        {nameList.map(({ name, lastName }) => (
          <TouchableOpacity style={userBoxStyles.container} onPress={()=> navigation.navigate('Personal Info', {name: name })}>
          <UserBox
            name={name}
            lastName={lastName}
            
          ></UserBox>
           </TouchableOpacity>
        ))}
      </View>
    

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default HomeScreen;
