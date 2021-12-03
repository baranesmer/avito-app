import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonBar from "./ButtonBar";
import ButtonIcon from "./ButtonIcon";
import ButtonIdentity from "./ButtonIdentity";
import ButtonVertrage from "./ButtonVertrage";

const LayoutInfo = ({ children, selected, navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#fff"
      }}
    >
      <View style={{ width: "25%", height: "100%" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20,marginTop:30 }}>Hallo </Text>
          <Text style={{ fontSize: 20, fontWeight: "700",marginTop:30 }}>Kevin</Text>
        </View>
        <View style={{ display: "flex", alignItems: "center", marginTop: 30 }}>
          <Text style={{ fontSize: 15 }}>Max Mustermann & </Text>
          <Text style={{ fontSize: 15 }}>Marie Mustermann </Text>
        </View>
        <View style={{ display: "flex", alignItems: "flex-start", marginTop: 150, marginLeft: "auto",marginRight: "auto"}}>
          <ButtonIdentity active={selected=="PersonalInfo"? true: false} onPress={()=>navigation.navigate("Personal Info")}>  Kundendaten</ButtonIdentity>
          <ButtonVertrage  active={selected=="Vertragsübersicht"? true: false} onPress={()=>navigation.navigate("Vertragsübersicht")}>  Vertragsübersicht</ButtonVertrage>
          <ButtonVertrage onPress={()=>navigation.navigate("NewPage")}>  Vertragseingabe</ButtonVertrage>
          <ButtonBar active={selected=="Beratungsfelder"? true: false} onPress={()=>navigation.navigate("Beratungsfelder")}>  Beratungsfelder</ButtonBar>
        </View>
      </View>

      <View style={{ width: "75%", height: "100%", backgroundColor: "#F9F9F9",padding: 10 }}>
        {children}
      </View>
    </View>
  );
};

export default LayoutInfo;
