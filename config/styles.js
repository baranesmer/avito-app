import React from "react";
import { StyleSheet } from "react-native";

export const vertragsBoxStyles = StyleSheet.create({
  
  container:{ 
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#A4C8F3",
  padding: 20,
  borderRadius: 20,
  margin: 5,
  display: "flex",
 // justifyContent: "flex-start",
 // alignItems: "center",
  width: 223,
  flexGrow: 1,
  height: 223,
  marginLeft:20,
  marginBottom:20
},
  header:{
  color:'#000000',
  alignItems:"center",
  fontWeight:"500",
  fontSize:13,
  justifyContent:"center"

},
text:{
color:'#000000',
fontWeight:"300",
fontSize:10,
alignItems:"flex-start",
marginTop:10

},
});

export const userBoxStyles = StyleSheet.create({
  container: {
    // backgroundColor:"#A4C8F3",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#A4C8F3",
    padding: 20,
    borderRadius: 20,
    margin: 5,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: 100,
    flexGrow: 1,
    height: 100,
  },
  innerContainer: {
    // backgroundColor:"#A4C8F3",
    margin: 5,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    flexGrow: 1,
    height: "100%",
  },
});

export const userAuthStyles = StyleSheet.create({
  container: {
    // backgroundColor:"#A4C8F3",

    padding: 20,
    borderRadius: 20,
    margin: 5,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: "60%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#A4C8F3",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    padding: 10,
  },
});

export const buttonStyle = StyleSheet.create({
  button: {
    backgroundColor: "#A4C8F3",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonAdd: {
    
    borderColor: "#A4C8F3",
    backgroundColor: '#fff',
    borderWidth:1,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

  },

  buttonIcon: {
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  textAdd: {
    color: "#A4C8F3",
  },
  buttonIconText: {
    fontWeight: "700",
  },
  activeText: {
    color: "#A4C8F3",
  },
});

export const addCustomerStyles = StyleSheet.create({
  container: {
    // backgroundColor:"#A4C8F3",

    padding: 20,
    borderRadius: 20,
    margin: 5,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  headerContainer: {
    display: "flex",
    marginLeft: "auto",
    marginTop: 20,
    marginRight: "auto",
    width: "80%",
    // backgroundColor: "#A4C8F3",
    padding: 20,
    borderRadius: 15,
    marginBottom: 50,
    borderColor: "#A4C8F3",
    borderWidth:1,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
  },
  header: {
    // color: "#fff",
    color: "#A4C8F3",
fontWeight:"700",
    textAlign: "center",
    fontSize: 24,
  },
  input: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#A4C8F3",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    elevation: 5,
    marginBottom: 16,
    borderRadius: 15,
    // backgroundColor: "#fff",
    padding: 10,
  },
});

export const customerSearchStyles = StyleSheet.create({
  input: {
    alignSelf: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#A4C8F3",
    shadowColor: "#000",

    display: "flex",
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export const customerInfoStyles = StyleSheet.create({
  container: {
    // backgroundColor:"#A4C8F3",

    padding: 20,
    borderRadius: 20,
    margin: 5,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },

  input: {
    alignSelf: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#A4C8F3",
    display: "flex",
    width: "60%",
    // backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 15,
    fontSize: 10,
    marginBottom: 7,
  },
  inputMini: {
    alignSelf: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#A4C8F3",
    display: "flex",
    width: "40%",
    // backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 15,
    fontSize: 10,
    marginBottom: 7,
  },
  text: {
    alignSelf: "center",
    color: "#636363",
    display: "flex",
    paddingVertical: 8,
    fontSize: 13,
    marginBottom: 9,
  },
  headerContainer: {
    borderColor: "#A4C8F3",
    borderWidth: 1,
    display: "flex",
    marginTop: 20,
    width: "100%",
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 20,
    marginBottom: 10,
  },
  header: {
    color: "#636363",
    textAlign: "center",
    fontSize: 15,
  },
});
