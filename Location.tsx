import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Platform, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator} from 'react-native';
import * as Location from 'expo-location';
import { Feather } from '@expo/vector-icons'; 

//Text color saved
const textC = '#AAA'
//Google maps key
const key = ''

//Export the page for signups
export default function Signup({setLocation, changePage} : any) {
    //location state
    const [location, setCity] = useState(null as any);
    //error message state
    const [errorMsg, setErrorMsg] = useState("");
    //use effect to get location
    useEffect(() => {
        (async () => {
            //set the google key to transform gps coordinates to actual location
            Location.setGoogleApiKey(key)
            //get permission to get users location
            let { status } = await Location.requestForegroundPermissionsAsync();
            //if not granted set error message
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                setCity("Not found :(")
                setLocation("Not found :(")
                return;
            }
            //get users position
            let location = await Location.getCurrentPositionAsync({});
            //transform position to address using google maps
            let info : any = await Location.reverseGeocodeAsync({latitude: location?.coords?.latitude, longitude: location?.coords?.longitude})
            //set the city for this component
            setCity(info[0].city);
            //set the city for parent component
            setLocation(info[0].city);
        })();
    }, []);
    
  //Render the component
  return (
    //keyboard avoiding view so user can type in stuff on signup page for example without losing sight of what he's typing
    <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      {/* Display only if location is not set yet */}
      {!location ? <>
        {/* Helpful message */}
        <Text style={{...styles.textColor, marginBottom: 20}}>Getting your location 🌎</Text>
        {/* Spinny spin spin thing to indicate that we're loading stuff in the background for the user pog :) */}
        <ActivityIndicator style={{marginTop: 10}} /></> : <></>}
      {/* Display only if location is set */}
      {location ? <Text style={{...styles.textColor}}>Location found</Text> : <></>}
      {/* Display location only if location is set */}
      {location ? <Text style={{...styles.textColor, color:"#D8A47F", marginBottom: 100}}>{location ? location : "Loading..."}</Text> : <></>}
      {/* Display only if location is set */}
      {location ? 
      // Anonymous shiv
      <>
        {/* Text info */}
        <Text style={{...styles.textColor, marginBottom: 0, fontSize: 22}}>If this is not your city</Text>
        <TextInput style={styles.inputStyle} placeholderTextColor={textC} placeholder="Input address here" />
        <Text style={{...styles.textColor, marginBottom: 100}}></Text>
        {/* Thims is our button to go to next page */}
        <TouchableOpacity
            style={{padding:20}}
            //Page 3 is signup page
            onPress={()=>changePage(3)}>
            {/* Cute icon */}
            <Feather name="arrow-right-circle" size={32} color="#D8A47F" />
            {/* End of button */}
        </TouchableOpacity></>
        // End of shiv
      : <></>}
    {/* End of page */}
    </KeyboardAvoidingView>
  );
}

// Our super cute styling for the page
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