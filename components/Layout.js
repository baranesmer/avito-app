import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonIcon from "./ButtonIcon";

const Layout = ({ children }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <View style={{ width: "30%", height: "100%" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20 }}>Hallo </Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Kevin</Text>
        </View>
        <View style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
          <Text style={{ fontSize: 15 }}>Selected User </Text>
        </View>
        <View style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
          <ButtonIcon active>Test</ButtonIcon>
          <ButtonIcon>Test</ButtonIcon>
        </View>
      </View>

      <View style={{ width: "70%", height: "100%", backgroundColor: "#FFF" }}>
        {children}
      </View>
    </View>
  );
};

export default Layout;
