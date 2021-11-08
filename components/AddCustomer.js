import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { addCustomerStyles } from "../config/styles";
import Button from "./Button";

const AddCustomer = ()=>{
  return(
    <View style={{width: "80%"}}>
      
        <TextInput style={addCustomerStyles.input} placeholder="Firstname"/>
        
        <TextInput style={addCustomerStyles.input} placeholder="lastname"/>

        <TextInput style={addCustomerStyles.input} placeholder="Phone Number"/>

        <TextInput style={addCustomerStyles.input} placeholder="E-Mail"/>

        <TextInput style={addCustomerStyles.input} placeholder="Relationship"/>

        <TextInput style={addCustomerStyles.input} placeholder="Mitarbeiternummer"/>
<View style= {{marginTop:20}}>
<Button>
        Add
        </Button>
</View>
    
    </View>
  )  
}
export default AddCustomer