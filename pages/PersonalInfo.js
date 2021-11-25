import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LayoutInfo from "../components/LayoutInfo";
import { customerInfoStyles } from "../config/styles";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
var radio_props = [
  { label: "Ja", value: 0 },
  { label: "Nein", value: 1 },
];
const PersonalInfoScreen = ({ navigation, route }) => {
  const [test, setTest] = useState("");
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
      <LayoutInfo selected="PersonalInfo">
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            paddingVertical: 20,


            justifyContent: "space-between",
          }}
        >
          {/* LEFT SIDE OF APP START  */}
          <View style={{ width: "50%" }}>
              {/* FIRST SECTION  */}
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                marginBottom: 10,
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: 30,
              }}
            >
              Persönliche Informationen
            </Text>
            {/* ONE BLOCK  */}
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Geburtsdatum</Text>
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={customerInfoStyles.input}
              >
                TT.MM.JJJJ
              </TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Eintritt Berufsleben</Text>
              <TextInput style={customerInfoStyles.input}>JJJJ</TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Brutto-Gehalt</Text>
              <TextInput style={customerInfoStyles.input}></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Netto-Gehalt</Text>
              <TextInput style={customerInfoStyles.input}></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Lohnfortzahlung 6 W</Text>
              <TextInput style={customerInfoStyles.input}></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Brutto-Gehalt</Text>

              <TextInput style={customerInfoStyles.input}></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Netto-Gehalt</Text>
              <TextInput style={customerInfoStyles.input}></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Brutto-Gehalt</Text>
              <RadioForm
                formHorizontal={true}
                initial={0}
                onPress={(value) => {
                  this.setState({ value: value });
                }}
              >
                {radio_props.map((obj, i) => (
                  <RadioButton labelHorizontal={true} key={i}>
                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={test === i}
                      onPress={() => setTest(obj.value)}
                      borderWidth={1}
                      buttonInnerColor={"#A4C8F3"}
                      buttonOuterColor={"#A4C8F3"}
                      buttonSize={15}
                      buttonOuterSize={20}
                      buttonStyle={{}}
                      buttonWrapStyle={{ marginLeft: 10 }}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelHorizontal={true}
                      // LABEL COLOUR
                      labelStyle={{ fontSize: 13, color: "#000" }}
                      labelWrapStyle={{}}
                    />
                  </RadioButton>
                ))}
              </RadioForm>
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                marginBottom: 10,
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: 30,
              }}
            >
              Persönliche Informationen
            </Text>
            {/* ONE BLOCK  */}
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Geburtsdatum</Text>
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={customerInfoStyles.input}
              >
                TT.MM.JJJJ
              </TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Eintritt Berufsleben</Text>
              <TextInput style={customerInfoStyles.input}>JJJJ</TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Brutto-Gehalt</Text>
              <TextInput style={customerInfoStyles.input}></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Netto-Gehalt</Text>
              <TextInput style={customerInfoStyles.input}></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Lohnfortzahlung 6 W</Text>
              <TextInput style={customerInfoStyles.input}></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Brutto-Gehalt</Text>

              <TextInput style={customerInfoStyles.input}></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Netto-Gehalt</Text>
              <TextInput style={customerInfoStyles.input}></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Brutto-Gehalt</Text>
              <RadioForm
                formHorizontal={true}
                initial={0}
                onPress={(value) => {
                  this.setState({ value: value });
                }}
              >
                {radio_props.map((obj, i) => (
                  <RadioButton labelHorizontal={true} key={i}>
                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={test === i}
                      onPress={() => setTest(obj.value)}
                      borderWidth={1}
                      buttonInnerColor={"#A4C8F3"}
                      buttonOuterColor={"#A4C8F3"}
                      buttonSize={15}
                      buttonOuterSize={20}
                      buttonStyle={{}}
                      buttonWrapStyle={{ marginLeft: 10 }}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelHorizontal={true}
                      // LABEL COLOUR
                      labelStyle={{ fontSize: 13, color: "#000" }}
                      labelWrapStyle={{}}
                    />
                  </RadioButton>
                ))}
              </RadioForm>
            </View>
          </View>
          {/* RIGHT SIDE OF APP START  */}

          <View style={{ width: "50%" }}>
          <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                marginBottom: 10,
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: 30,
              }}
            >
              Persönliche Informationen
            </Text>
            {/* ONE BLOCK  */}
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Geburtsdatum</Text>
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={customerInfoStyles.input}
              >
                TT.MM.JJJJ
              </TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Eintritt Berufsleben</Text>
              <TextInput style={customerInfoStyles.input}>JJJJ</TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Brutto-Gehalt</Text>
              <TextInput style={customerInfoStyles.input}></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Netto-Gehalt</Text>
              <TextInput style={customerInfoStyles.input}></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Lohnfortzahlung 6 W</Text>
              <TextInput style={customerInfoStyles.input}></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Brutto-Gehalt</Text>

              <TextInput style={customerInfoStyles.input}></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Netto-Gehalt</Text>
              <TextInput style={customerInfoStyles.input}></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Brutto-Gehalt</Text>
              <RadioForm
                formHorizontal={true}
                initial={0}
                onPress={(value) => {
                  this.setState({ value: value });
                }}
              >
                {radio_props.map((obj, i) => (
                  <RadioButton labelHorizontal={true} key={i}>
                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={test === i}
                      onPress={() => setTest(obj.value)}
                      borderWidth={1}
                      buttonInnerColor={"#A4C8F3"}
                      buttonOuterColor={"#A4C8F3"}
                      buttonSize={15}
                      buttonOuterSize={20}
                      buttonStyle={{}}
                      buttonWrapStyle={{ marginLeft: 10 }}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelHorizontal={true}
                      // LABEL COLOUR
                      labelStyle={{ fontSize: 13, color: "#000" }}
                      labelWrapStyle={{}}
                    />
                  </RadioButton>
                ))}
              </RadioForm>
            </View>
          </View>
        </View>
      </LayoutInfo>
    </SafeAreaView>
  );
};

export default PersonalInfoScreen;
