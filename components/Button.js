import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { buttonStyle } from "../config/styles";

export const Button =({children, onPress})=> {
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyle.button}>
            <Text style={buttonStyle.text}>{children}</Text>
        </TouchableOpacity>
    )
}
export default Button;