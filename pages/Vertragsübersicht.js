import React from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LayoutInfo from "../components/LayoutInfo";
import { userBoxStyles, vertragsBoxStyles } from "../config/styles";

const VertragsubersichtScreen = ({ navigation, routes }) => {
  let boxes = ["x", "y", "z", "t", "w", "k", "l"];

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
      <LayoutInfo selected="Vertragsübersicht" navigation={navigation}>
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
          <TouchableOpacity>
            <View style={vertragsBoxStyles.container}>
              <Text style={vertragsBoxStyles.header}>Altersvorsorge</Text>
              <Text style={vertragsBoxStyles.text}>Riester-Rente</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={vertragsBoxStyles.container}>
              <Text style={vertragsBoxStyles.header}>
                Immobilie + Bankprodukte
              </Text>
              <Text style={vertragsBoxStyles.text}>Riester-Rente</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={vertragsBoxStyles.container}>
              <Text style={vertragsBoxStyles.header}>
                Gesundheitsversorgung
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={vertragsBoxStyles.container}>
              <Text style={vertragsBoxStyles.header}>
                Sach/-Vermögenssicherung
              </Text>
              <Text style={vertragsBoxStyles.text}>Berufsunfähigkeitsvers.</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={vertragsBoxStyles.container}>
              <Text style={vertragsBoxStyles.header}>Kindervorsorge</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={vertragsBoxStyles.container}>
              <Text style={vertragsBoxStyles.header}>
                Vermögensaufbau/-anlage
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </LayoutInfo>
    </SafeAreaView>
  );
};
export default VertragsubersichtScreen;
