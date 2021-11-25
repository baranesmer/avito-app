import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { addCustomerStyles } from "../config/styles";
import Button from "./Button";

const AddCustomer = ()=>{
  return(
    <View style={{width: "80%"}}>
      
        <TextInput style={addCustomerStyles.input} placeholder="Vorname"/>
        
        <TextInput style={addCustomerStyles.input} placeholder="Nachname"/>

        <TextInput style={addCustomerStyles.input} placeholder="Telefonnummer"/>

        <TextInput style={addCustomerStyles.input} placeholder="E-Mail"/>

        <TextInput style={addCustomerStyles.input} placeholder="Familienstand"/>

        <TextInput style={addCustomerStyles.input} placeholder="Mitarbeiternummer"/>
        {/* Mutlaka sil  */}
        <TextInput editable={false} selectTextOnFocus={false} style={{opacity: 0}}  placeholder="Mitarbeiternummer"/>
        {/* Mutlaka sil  */}

        <TextInput style={addCustomerStyles.input} placeholder="Vorname Partner"/>

        <TextInput style={addCustomerStyles.input} placeholder="Nachname Partner"/>

<View style= {{marginTop:20}}>
<Button>
        Add
        </Button>
</View>
    
    </View>
  )  
}
export default AddCustomer