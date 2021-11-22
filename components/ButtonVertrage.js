import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { buttonStyle } from "../config/styles";
import { PlusIcon } from "./PlusIcon";
import { SearchIcon } from "./SearchIcon";
import { SearchIconDark } from "./SearchIconDark";
import VertrageIconActive from "./VertrageIconActive";
import VertrageIconDark from "./VertrageIconDark";

export const ButtonVertrage = ({ children, onPress, active }) => {
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle.buttonIcon}>
          <SvgXml xml={active ? VertrageIconActive : VertrageIconDark} />
    
          <Text
            style={active ? buttonStyle.activeText : buttonStyle.buttonIconText}
          >
            {children}
          </Text>
        </TouchableOpacity>
      );
    };
export default ButtonVertrage;

