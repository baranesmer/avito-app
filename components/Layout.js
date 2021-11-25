import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonIcon from "./ButtonIcon";
import ButtonSearch from "./ButtonSearch";
import { SearchIcon } from "./SearchIcon";

const Layout = ({ children, selected, navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        backgroundColor:"#fff"
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
          <Text style={{ fontSize: 20 ,marginTop:20 }}>Hallo </Text>
          <Text style={{ fontSize: 20, fontWeight: "700" ,marginTop:20}}>Kevin</Text>
        </View>
        <View style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
          <Text style={{ fontSize: 15 }}>Selected User </Text>
        </View>
        <View style={{ display: "flex", alignItems: "center", marginTop: 100,marginLeft: "auto",marginRight: "auto" }}>
          <ButtonSearch active={selected==="Home"? true: false} onPress={()=> navigation.navigate("Test")}>Kunde suchen</ButtonSearch>
          <ButtonIcon active={selected==="AddCustomer"} onPress={()=> navigation.navigate("Add Customer")}>Kunde anlegen</ButtonIcon>
        </View>
      </View>

      <View style={{ width: "75%", height: "100%", backgroundColor: "#f9f9f9", padding:10 }}>
        {children}
      </View>
    </View>
  );
};

export default Layout;
