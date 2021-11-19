import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { buttonStyle } from "../config/styles";
import { PlusIcon } from "./PlusIcon";
import { PlusIconActive } from "./PlusIconActive";
import { PlusIconDark } from "./PlusIconDark";

export const ButtonIcon = ({ children, onPress, active }) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle.buttonIcon}>
      <SvgXml xml={active ? PlusIconActive : PlusIconDark} />

      <Text
        style={active ? buttonStyle.activeText : buttonStyle.buttonIconText}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};
export default ButtonIcon;
