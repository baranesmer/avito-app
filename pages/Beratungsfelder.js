import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import LayoutInfo from "../components/LayoutInfo";
import { vertragsBoxStyles } from "../config/styles";

const BeratungsfelderScreen = ({ navigation, routes }) => {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        // paddingVertical: 20,
        backgroundColor: "#fff",
      }}
    >
      <LayoutInfo elected="Beratungsfelder" navigation={navigation}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            paddingTop: 150,
          }}
        >
         <TouchableOpacity>
            <View style={vertragsBoxStyles.container}>
              <Text style={vertragsBoxStyles.header}>Einkommenssicherung</Text>
              <Text style={vertragsBoxStyles.text}>Berufsunfähigkeitsvers.</Text>
            </View>
          </TouchableOpacity>

        </View>
      </LayoutInfo>
    </SafeAreaView>
  );
};

export default BeratungsfelderScreen;
