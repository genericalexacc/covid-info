import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Platform, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const textC = '#AAA'

//Our signup component
export default function Signup({setInfo, changePage} : any) {
  //Render the component
  return (
    //Keyboard avoiding view so user sees what theyre typing
    <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <Text style={{...styles.textColor, marginBottom: 20}}>Please fill this out 📝</Text>
      <TextInput style={styles.inputStyle} onChangeText={(Value)=>setInfo('Email', Value)} placeholderTextColor={textC} placeholder="Email" />
      <TextInput style={styles.inputStyle} onChangeText={(Value)=>setInfo('Password', Value)} secureTextEntry={true} placeholderTextColor={textC} placeholder="Password" />
      <TextInput style={styles.inputStyle} onChangeText={(Value)=>setInfo('Firstname', Value)} placeholderTextColor={textC} placeholder="First name" />
      <TextInput style={styles.inputStyle} onChangeText={(Value)=>setInfo('Lastname', Value)} placeholderTextColor={textC} placeholder="Last name" />
      <TextInput style={styles.inputStyle} onChangeText={(Value)=>setInfo('Job', Value)} placeholderTextColor={textC} placeholder="Job" />
      <TextInput style={styles.inputStyle} onChangeText={(Value)=>setInfo('Age', Value)} placeholderTextColor={textC} keyboardType="numeric" placeholder="Age" />
      <TextInput style={styles.inputStyle} onChangeText={(Value)=>setInfo('Conditions', Value)} placeholderTextColor={textC} multiline={true} numberOfLines={4} placeholder="Prexisting medical conditions like asthma or auto immune disease." />
      {/* Button to go to next page, info is auto saved */}
      <TouchableOpacity
        style={{padding:20}}
        //Change page :)
        onPress={()=>changePage()}>
        {/* Cute icon */}
        <Feather name="arrow-right-circle" size={32} color="#D8A47F" />
      {/* End of button */}
      </TouchableOpacity>
    {/* End of view */}
    </KeyboardAvoidingView>
  );
}

// Our styles POGCHAMP
const styles = StyleSheet.create({
  textColor: {
    color: '#E7ECEF',
    fontWeight: 'bold',
    fontSize: 32,
  },
  container: {
    flex: 1,
    backgroundColor: '#272932',
    color: '#E7ECEF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    fontWeight:'normal', 
    marginTop:20, 
    borderColor: 'transparent', 
    borderBottomColor: '#DDD', 
    color:  '#E7ECEF',
    borderStyle:'solid', 
    borderWidth:1, 
    paddingBottom: 10, 
    paddingLeft: 7.5, 
    fontSize: 16, 
    width: 250, 
    alignContent: 'center'
  }
});
