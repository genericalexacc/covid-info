import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Platform, KeyboardAvoidingView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Dash from 'react-native-dash';


const textC = '#AAA'

//Our settings page, its basically a rerender of the signup page, but that displays already filled information
export default function Settings({changePage, info, setInfo} : any) {
  return (
    <>
    {/* Scroll view for potential overflow */}
      <ScrollView style={{height:'85%'}}>
          {/* Spacer */}
          <View style={{marginBottom: 25}}></View>
          {/* Title */}
          <View style={{...styles.container, marginBottom: 0, marginLeft: -10}}>
            <Text style={{color: '#E7ECEF', fontWeight: 'bold', fontSize: 48, marginLeft: 30, marginBottom: 15}}>Settings</Text>
          </View>
          {/* Cute dash */}
          <Dash dashGap={5} dashLength={10} dashThickness={3} dashColor={'#F05D5E'} style={{width:900, height:1, marginLeft:2}}/>
          {/* Spacer */}
          <View style={{marginBottom: 50}}></View>

          {/* Keyboard avoiding view to not hide what the user is typing */}
          <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.form}>
            <TextInput style={styles.inputStyle} onChange={(Value)=>setInfo('Email', Value)} placeholderTextColor={textC} value={info['Email']} placeholder="Email" />
            <TextInput style={styles.inputStyle} onChange={(Value)=>setInfo('Password', Value)} placeholderTextColor={textC} value={info['Password']} placeholder="Password" />
            <TextInput style={styles.inputStyle} onChange={(Value)=>setInfo('Firstname', Value)} placeholderTextColor={textC} value={info['Firstname']} placeholder="Fistname" />
            <TextInput style={styles.inputStyle} onChange={(Value)=>setInfo('Lastname', Value)} placeholderTextColor={textC} value={info['Lastname']} placeholder="Lastname" />
            <TextInput style={styles.inputStyle} onChange={(Value)=>setInfo('Job', Value)} placeholderTextColor={textC} value={info['Job']} placeholder="Job" />
            <TextInput style={styles.inputStyle} onChange={(Value)=>setInfo('Age', Value)} placeholderTextColor={textC} value={info['Age']} keyboardType="numeric" placeholder="Age" />
            <TextInput style={styles.inputStyle} onChange={(Value)=>setInfo('Conditions', Value)} placeholderTextColor={textC} value={info['Conditions']} multiline={true} numberOfLines={4} placeholder="Prexisting medical conditions like asthma or auto immune disease." />
            {/* Button to save everything, even though it auto saves already */}
            <TouchableOpacity
                style={{padding:20, marginTop: 20, borderRadius: 50}}
                onPress={()=>{ Alert.alert("Successfully Saved", "") }}>
                <Ionicons name="save" size={28} color="#D8A47F" />
            </TouchableOpacity>
            {/* End of the view */}
          </KeyboardAvoidingView>
      {/* End of the component */}
      </ScrollView>
    </>
  )
}

// Our nice styles
const styles = StyleSheet.create({
  textColor: {
    color: '#E7ECEF',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom:-15,
    textTransform: 'uppercase',
  },
  container: {
    backgroundColor: '#272932',
    color: '#E7ECEF',
    marginTop: 40,
    marginLeft: 20,
    marginBottom: 30,
  },
  form: {
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
