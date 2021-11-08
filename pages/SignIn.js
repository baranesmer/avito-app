import React from "react";
import { View } from "react-native";
import Button from "../components/Button";
import UserAuth from "../components/UserAuth";

const SignInScreen = ({ navigation }) => {
  return (
    <View
      style={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
         backgroundColor:"#fff"
      }}
    >
      <UserAuth />
      <View style={{ display: "flex", alignItems: "center" }}>
        <Button onPress={() => navigation.navigate("Entry")}>Login</Button>
        <View style={{ height: 150 }} />
      </View>
    </View>
  );
};

export default SignInScreen;
