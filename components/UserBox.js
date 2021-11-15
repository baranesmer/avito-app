import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {  userBoxStyles } from "../config/styles";

const UserBox =({name,lastName,onPress})=> {
    return(
       

        <View style={userBoxStyles.innerContainer}>
            <Text>{name}</Text>
            <Text>{lastName}</Text>
            
        </View>
        

    )
}



export default UserBox;