import React from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { customerInfoStyles } from "../config/styles";

export const PersonalInfoScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      {/* <Text>{route.params.name}</Text>
       */}
      <View style={{ flex: 1 }}>
        <View style={customerInfoStyles.headerContainer}>
          <Text style={customerInfoStyles.header}>
            PersÃ¶nliche Informationen Kunde
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
            <Text style={customerInfoStyles.text}>Geburtsdatum</Text>
            <Text style={customerInfoStyles.text}>Eintritt Berufsleben</Text>
            <Text style={customerInfoStyles.text}>Brutto-Gehalt</Text>
            <Text style={customerInfoStyles.text}>Netto-Gehalt</Text>
            <Text style={customerInfoStyles.text}>Lohnfortzahlung 6 W</Text>
            <Text style={customerInfoStyles.text}>Brutto-Gehalt</Text>
            <Text style={customerInfoStyles.text}>Netto-Gehalt</Text>
          </View>

          <View style={{ flexGrow: 1 }}>
            <TextInput
              editable={false}
              selectTextOnFocus={false}
              style={customerInfoStyles.input}
            >
              TT.MM.JJJJ
            </TextInput>
            <TextInput style={customerInfoStyles.input}>JJJJ</TextInput>
            <TextInput style={customerInfoStyles.input}></TextInput>
            <TextInput style={customerInfoStyles.input}></TextInput>
            <TextInput style={customerInfoStyles.input}></TextInput>
            <TextInput style={customerInfoStyles.input}></TextInput>
            <TextInput style={customerInfoStyles.input}></TextInput>
          </View>
        </View>
      </View>

      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={customerInfoStyles.headerContainer}>
          <Text style={customerInfoStyles.header}>
            PersÃ¶nliche Informationen Partner
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
            <Text style={customerInfoStyles.text}>Geburtsdatum</Text>
            <Text style={customerInfoStyles.text}>Eintritt Berufsleben</Text>
            <Text style={customerInfoStyles.text}>Brutto-Gehalt</Text>
            <Text style={customerInfoStyles.text}>Netto-Gehalt</Text>
            <Text style={customerInfoStyles.text}>Lohnfortzahlung 6 W</Text>
            <Text style={customerInfoStyles.text}>Brutto-Gehalt</Text>
            <Text style={customerInfoStyles.text}>Netto-Gehalt</Text>
          </View>
          <View style={{ flexGrow: 1 }}>
            <TextInput
              editable={false}
              selectTextOnFocus={false}
              style={customerInfoStyles.input}
            >
             TT.MM.JJJJ
            </TextInput>
            <TextInput style={customerInfoStyles.input}>JJJJ</TextInput>
            <TextInput style={customerInfoStyles.input}></TextInput>
            <TextInput style={customerInfoStyles.input}></TextInput>
            <TextInput style={customerInfoStyles.input}></TextInput>
            <TextInput style={customerInfoStyles.input}></TextInput>
            <TextInput style={customerInfoStyles.input}></TextInput>
        
          </View>
        </View>
      </View>

      <View style={{ flex: 1, alignItems: "center" }}>
      <View style={customerInfoStyles.headerContainer}>
          <Text style={customerInfoStyles.header}>
          Informationen Finanzen
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
            <Text style={customerInfoStyles.text}>Geburtsdatum</Text>
            <Text style={customerInfoStyles.text}>Eintritt Berufsleben</Text>
            <Text style={customerInfoStyles.text}>Name</Text>
            <Text style={customerInfoStyles.text}>Name</Text>
          </View>
          <View style={{ flexGrow: 1 }}>
            <TextInput
              editable={false}
              selectTextOnFocus={false}
              style={customerInfoStyles.input}
            >
             TT.MM.JJJJ
            </TextInput>
            <TextInput style={customerInfoStyles.input}></TextInput>
            <TextInput style={customerInfoStyles.input}></TextInput>
            <TextInput style={customerInfoStyles.input}></TextInput>
            
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default PersonalInfoScreen;