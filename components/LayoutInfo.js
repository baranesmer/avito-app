import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonBar from "./ButtonBar";
import ButtonIcon from "./ButtonIcon";
import ButtonIdentity from "./ButtonIdentity";
import ButtonVertrage from "./ButtonVertrage";

const LayoutInfo = ({ children }) => {
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
          <ButtonIdentity active>Kundendaten</ButtonIdentity>
          <ButtonVertrage>Vertrage</ButtonVertrage>
          <ButtonBar>Beratungsfelder</ButtonBar>
        </View>
      </View>

      <View style={{ width: "70%", height: "100%", backgroundColor: "#FFF" }}>
        {children}
      </View>
    </View>
  );
};

export default LayoutInfo;
