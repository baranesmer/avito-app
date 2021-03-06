import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomerSearch from "../components/CustomerSearch";
import UserBox from "../components/UserBox";
import SignUpScreen from "./SignUp";
import NewPageScreen from "./Test";
import { userBoxStyles } from "../config/styles";
import Layout from "../components/Layout";

const HomeScreen = ({ navigation }) => {
  const nameList = [
    { name: "Baran", lastName: "Esmer" },
    { name: "Kevin", lastName: "Schweissguth" },
    { name: "Engin", lastName: "Güngör" },

    { name: "Eren", lastName: "Düzel" },
    { name: "İbrahim", lastName: "Atılgan" },
  ];
 // const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView style={{ backgroundColor: "#F9F9F9", height: "100%" }}>
      <Layout selected="Home" navigation={navigation}>
        <CustomerSearch onPress={() => navigation.push("Add Customer")} />
        <View style={styles.container}>
          {nameList.map(({ name, lastName }) => (
            <TouchableOpacity
              style={userBoxStyles.container}
              onPress={() =>
                navigation.navigate("Personal Info", { name: name })
              }
            >
              <UserBox name={name} lastName={lastName}></UserBox>
            </TouchableOpacity>
          ))}
        </View>
        <StatusBar style="auto" />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default HomeScreen;
