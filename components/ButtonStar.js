import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { buttonStyle } from "../config/styles";
import { StarIcon } from "./StarIcon";
import { StarIconDark } from "./StarIconDark";

export const ButtonStar = ({ children, onPress, active }) => {
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle.buttonIcon}>
          <SvgXml xml={active ? StarIcon : StarIconDark} />
    
          <Text
            style={active ? buttonStyle.activeText : buttonStyle.buttonIconText}
          >
            {children}
          </Text>
        </TouchableOpacity>
      );
    };
export default ButtonStar;

