import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { buttonStyle } from "../config/styles";
import { BarIconActive } from "./BarIconActive";
import { BarIconDark } from "./BarIconDark";
import { PlusIcon } from "./PlusIcon";
import { PlusIconActive } from "./PlusIconActive";
import { PlusIconDark } from "./PlusIconDark";

export const ButtonBar = ({ children, onPress, active }) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle.buttonIcon}>
      <SvgXml xml={active ? BarIconActive : BarIconDark} />

      <Text
        style={active ? buttonStyle.activeText : buttonStyle.buttonIconText}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};
export default ButtonBar;
