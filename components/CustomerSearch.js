import React from "react";
import { Image, Text, TextInput, View, TouchableOpacity} from "react-native";
import { customerSearchStyles } from "../config/styles";
import { SvgUri, SvgXml } from "react-native-svg";
import { PlusIcon } from "./PlusIcon";
// import SvgUri from 'react-native-svg-uri'

const CustomerSearch =({onPress})=>{

    return(
        <View style={{display: 'flex', flexDirection:"row", justifyContent:"space-around", alignContent:"center",  flexShrink:1,marginTop: 20, marginBottom: 80, marginHorizontal:20,}}>
             <TextInput style={customerSearchStyles.input}  placeholder= "Customer Search"/>
             <TouchableOpacity onPress={onPress} style={{backgroundColor:"#A4C8F3", alignSelf:"center", borderRadius:99, flexShrink:1, padding: 20}}>
              <SvgXml xml={PlusIcon} width="32" height="32"/>

             </TouchableOpacity>

        </View>
    )
}
export default CustomerSearch