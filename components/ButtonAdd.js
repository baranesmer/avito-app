import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { buttonStyle } from "../config/styles";

export const ButtonAdd =({children, onPress})=> {
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyle.buttonAdd}>
            <Text style={buttonStyle.textAdd}>{children}</Text>
        </TouchableOpacity>
    )
}
export default ButtonAdd;