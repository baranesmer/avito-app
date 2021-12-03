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
import ButtonStar from "../components/ButtonStar";
var radio_props = [
  { label: "Ja", value: 0 },
  { label: "Nein", value: 1 },
];
// const star = ["clicked","clicked",""]

const PersonalInfoScreen = ({ navigation, route }) => {
const [star, setStar] = useState(["clicked","clicked",""])
const starHandler = (key)=> {
  let temp =[]
  for (let index = 0; index < 3; index++) {
    console.log(key)
    if (index<=key) {
      temp.push("clicked")
    }else {
      temp.push("")
    }
  }
  console.log(temp)
  setStar(temp)
}

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
      <LayoutInfo selected="PersonalInfo" navigation={navigation}>
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
                color : "#636363"
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

            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                marginBottom: 10,
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: 30,
                marginTop: 80,
                color : "#636363"
              }}
            >
              Persönliche Informationen
                    Partner
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
                color : "#636363"
              }}
            >
              Informationen Finanzen
                    
            </Text>
            {/* ONE BLOCK  */}
            
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Finanzielle Freheit im Alter:</Text>
              <View style = {{
              flexDirection: "row",
              justifyContent:"flex-end"}}>
                <ButtonStar/>
                <ButtonStar/>
                <ButtonStar/>
                
                </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Einkommenssicherung:</Text>
              <View style = {{
              flexDirection: "row",
              justifyContent:"flex-end"}}>
                <ButtonStar/>
                <ButtonStar/>
                <ButtonStar/>
                
                </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Sach- & Vermögenssicherung:</Text>
              <View style = {{
              flexDirection: "row",
              justifyContent:"flex-end"}}>
                <ButtonStar/>
                <ButtonStar/>
                <ButtonStar/>
                
                </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Immobilien Eingentum:</Text>
              <View style = {{
              flexDirection: "row",
              justifyContent:"flex-end"}}>
                <ButtonStar/>
                <ButtonStar/>
                <ButtonStar/>
                
                </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Passive Einkünfte mit Immobilien:</Text>
              <View style = {{
              flexDirection: "row",
              justifyContent:"flex-end"}}>
                <ButtonStar/>
                <ButtonStar/>
                <ButtonStar/>
                
                </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Gesundheitsversorgung:</Text>
              <View style = {{
              flexDirection: "row",
              justifyContent:"flex-end"}}>
                <ButtonStar/>
                <ButtonStar/>
                <ButtonStar/>
                
                </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Staatliche Förderungen:</Text>
              <View style = {{
              flexDirection: "row",
              justifyContent:"flex-end"}}>
                {
                  star.map((element,index)=> <ButtonStar onPress={()=> starHandler(index)} active={element==="clicked"?true:false}/>)
                }
                {/* <ButtonStar/>
                <ButtonStar/>
                <ButtonStar/> */}
                
                </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Steuervorteile:</Text>
              <View style = {{
              flexDirection: "row",
              justifyContent:"flex-end"}}>
                <ButtonStar/>
                <ButtonStar/>
                <ButtonStar/>
                
                </View>
               
               </View>
            
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Kindervorsorge:</Text>
              <View style = {{
              flexDirection: "row",
              justifyContent:"flex-end"}}>
                <ButtonStar/>
                <ButtonStar/>
                <ButtonStar/>
                
                </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Vermögensaufbau/-Anlage</Text>
              <View style = {{
              flexDirection: "row",
              justifyContent:"flex-end"}}>
                <ButtonStar/>
                <ButtonStar/>
                <ButtonStar/>
                
                </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Zieleinkommen im Krankheitsfall :</Text>
              <TextInput style={customerInfoStyles.inputMini}></TextInput>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Zieleinkommen zu Rentenbeginn:</Text>
              <TextInput style={customerInfoStyles.inputMini}></TextInput>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>Gewünschtes Rentenalter:</Text>
              <TextInput style={customerInfoStyles.inputMini}></TextInput>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>kurzfristige Ziele:</Text>
              <TextInput style={customerInfoStyles.inputMini}></TextInput>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>mittelfristige Ziele:</Text>
              <TextInput style={customerInfoStyles.inputMini}></TextInput>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={customerInfoStyles.text}>langfristige Ziele:</Text>
              <TextInput style = {customerInfoStyles.inputMini}></TextInput>
            </View>

           
          </View>
        </View>
      </LayoutInfo>
    </SafeAreaView>
  );
};

export default PersonalInfoScreen;
