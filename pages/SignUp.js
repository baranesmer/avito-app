import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddCustomer from "../components/AddCustomer";
import Layout from "../components/Layout";
import { addCustomerStyles } from "../config/styles";

const SignUpScreen = ({navigation}) => {
  return (
    <SafeAreaView style= {{backgroundColor: "#fff",flexGrow:1, display:"flex", alignContent:"center"}}>
      <Layout selected="AddCustomer" navigation={navigation}>
      <View style={addCustomerStyles.headerContainer}>
        <Text style={addCustomerStyles.header}>Kundenlage</Text>
      </View>
      
      <View
        style={{
          display: "flex",
          flexGrow: 1,
          alignItems:"center",

        }}
      >
        <AddCustomer />
      </View>
      </Layout>
    </SafeAreaView>
  );
};
export default SignUpScreen;
