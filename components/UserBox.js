import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { userBoxStyles } from "../config/styles";

const UserBox =({name,lastName})=> {
    return(
        <View style={userBoxStyles.container}>
            <Text>{name}</Text>
            <Text>{lastName}</Text>
            
        </View>
    )
}



export default UserBox;