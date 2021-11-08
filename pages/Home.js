import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomerSearch from "../components/CustomerSearch";
import UserBox from "../components/UserBox";
import SignUpScreen from "./SignUp";
import NewPageScreen from "./Test";

const HomeScreen = ({press}) => {
  const nameList = [
    { name: "Baran", lastName: "Esmer" },
    { name: "Kevin", lastName: "Schweissguth" },
    { name: "Engin", lastName: "Güngör" },

    { name: "Eren", lastName: "Düzel" },
    { name: "İbrahim", lastName: "Atılgan" },
  ];
  const Tab = createBottomTabNavigator()

  return (
    <SafeAreaView style ={{backgroundColor:"#fff",height:"100%"}} >
      
      <CustomerSearch onPress={press}/>
      <View style={styles.container}>
      {nameList.map(({ name, lastName }) => (
        <UserBox name={name} lastName={lastName}></UserBox>
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
