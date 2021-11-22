import React from "react";
import { Text, View } from "react-native";
import AddCustomer from "../components/AddCustomer";
import Layout from "../components/Layout";
import { addCustomerStyles } from "../config/styles";

const SignUpScreen = () => {
  return (
    <View style= {{backgroundColor: "#fff",flexGrow:1, display:"flex", alignContent:"center"}}>
      <Layout>
      <View style={addCustomerStyles.headerContainer}>
        <Text style={addCustomerStyles.header}>Kundenlage</Text>
      </View>
      
      <View
        style={{
          display: "flex",
          flexGrow: 1,
          alignItems:"center",

          backgroundColor: "#fff",
        }}
      >
        <AddCustomer />
      </View>
      </Layout>
    </View>
  );
};
export default SignUpScreen;
