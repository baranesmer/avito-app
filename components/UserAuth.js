
import React from "react";
import {  TextInput, View } from "react-native";
import { userAuthStyles } from "../config/styles";
import Button from "./Button";
import { SvgXml } from "react-native-svg";
import { Logo } from "./Logo";

const UserAuth=({navigation})=> {
    return(
        <View style={userAuthStyles.container}>
            <SvgXml xml={Logo} width="300" height="300"  />
             <TextInput style={userAuthStyles.input} placeholder= "Username"/>

            <TextInput style={userAuthStyles.input} placeholder= "Password"/>

        </View>
    )
}
export default UserAuth;