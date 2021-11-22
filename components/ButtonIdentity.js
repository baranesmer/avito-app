import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { buttonStyle } from "../config/styles";
import { IdentityIcon } from "./IdentityIcon";
import { IdentityIconDark } from "./IdentityIconDark";
import { PlusIcon } from "./PlusIcon";
import { SearchIcon } from "./SearchIcon";
import { SearchIconDark } from "./SearchIconDark";

export const ButtonIdentity = ({ children, onPress, active }) => {
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle.buttonIcon}>
          <SvgXml xml={active ? IdentityIcon : IdentityIconDark} />
    
          <Text
            style={active ? buttonStyle.activeText : buttonStyle.buttonIconText}
          >
            {children}
          </Text>
        </TouchableOpacity>
      );
    };
export default ButtonIdentity;

