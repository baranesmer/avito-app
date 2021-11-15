import React from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { customerInfoStyles } from "../config/styles";

export const PersonalInfoScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ display: "flex", flexDirection: "row", flex: 1 ,backgroundColor:"#fff"}}>
      {/* <Text>{route.params.name}</Text>
       */}
      <View style={{ flex: 1}}>
        <View style={customerInfoStyles.headerContainer}>
          <Text style={customerInfoStyles.header}>
            Persönliche Informationen Kunde
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 30,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View style={{ display: "flex", marginRight: 50 }}>
            <Text style={customerInfoStyles.text}>Name</Text>
            <Text style={customerInfoStyles.text}>Name</Text>
            <Text style={customerInfoStyles.text}>Name</Text>
            <Text style={customerInfoStyles.text}>Name</Text>
          </View>

          <View style={{ flexGrow: 1 }}>
            <TextInput  editable={false} selectTextOnFocus={false} style={customerInfoStyles.input}>Name</TextInput>
            <TextInput style={customerInfoStyles.input}>Name</TextInput>
            <TextInput style={customerInfoStyles.input}>Name</TextInput>
            <TextInput style={customerInfoStyles.input}>Name</TextInput>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>Test</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>Test</Text>
      </View>
    </SafeAreaView>
  );
};

export default PersonalInfoScreen;
