import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Platform, KeyboardAvoidingView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Dash from 'react-native-dash';

//Vaccine page
function Vaccines(){
    //Render the component
    return (
        <View style={{maxHeight:208, padding: 15, paddingLeft: 15, width:'90%', marginLeft:'5%', borderRadius: 10, borderColor: '#88A2AA', borderStyle: 'solid', borderWidth: 3, backgroundColor: '#E7ECEF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Text style={{fontSize: 18, color: '#0F1A20'}}>Based on your profile and location, you should be able to get your vaccine shot on July 24th 2021</Text>
            {/* On press alert user that they have been successfully signed up */}
            <TouchableOpacity onPress={()=>{
                Alert.alert(
                    "Notification Set up",
                    "You will be notified a week before you can signup for vaccine.",
                )
            }}>
                {/* What the button should looks like */}
                <View style={{padding:20, borderRadius: 10, backgroundColor: '#D8A47F', justifyContent: 'center', display: 'flex', alignContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: 25}}>
                    <Text style={{color: 'white',}}>Notify me when available</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


//Covid tests page
function GetTested(){
    //Render the component
    return (
        <View style={{maxHeight:208, marginTop: 50, padding: 15, paddingLeft: 15, width:'90%', marginLeft:'5%', borderRadius: 10, borderColor: '#88A2AA', borderStyle: 'solid', borderWidth: 3, backgroundColor: '#E7ECEF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Text style={{fontSize: 18, color: '#0F1A20'}}>You can get a Covid Test scheduled with one button. If free tests are not offered at your location an Apple Pay prompt will appear.</Text>
            {/* On press alert user that they have been successfully signed up */}
            <TouchableOpacity onPress={()=>{
                Alert.alert(
                    "Test requested",
                    "You will receive an email from the test provider for your city.",
                )
            }}>
                {/* What the button should look like */}
                <View style={{padding:20, borderRadius: 10, backgroundColor: '#D8A47F', justifyContent: 'center', display: 'flex', alignContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: 25}}>
                    <Text style={{color: 'white',}}>Schedule test</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


//Export the whole page so other components could use it
export default function Information({changePage} : any) {
  //Render the page here
  return (
      //Anonymous component to wrap everything together
        <>
            {/* Scrollview instead of view so that overflow can be scrolled on */}
            <ScrollView style={{height:'85%'}}>
                {/* Spacer */}
                <View style={{marginBottom: 25}}></View>
                {/* Title */}
                <View style={{...styles.container, marginBottom: 0, marginLeft: -10}}>
                    <Text style={{color: '#E7ECEF', fontWeight: 'bold', fontSize: 48, marginLeft: 30, marginBottom: 15}}>Information</Text>
                </View>
                {/* Dash for aesthetics */}
                <Dash dashGap={5} dashLength={10} dashThickness={3} dashColor={'#F05D5E'} style={{width:900, height:1, marginLeft:2}}/>
                {/* Empty text for spacing */}
                <View style={styles.container}>
                    <Text style={styles.textColor}></Text>
                </View>
                {/* Vaccines tab */}
                <Vaccines/>
                {/* Covid testing tab */}
                <GetTested/>
                {/* End of component */}
            </ScrollView>
        </>
  )
}

// Stylesheet for styling our components
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
  inputStyle: {fontWeight:'normal', marginTop:20, borderColor: 'transparent', borderBottomColor: '#DDD', borderStyle:'solid', borderWidth:1, paddingBottom: 10, paddingLeft: 7.5, fontSize: 16, width: 250, alignContent: 'center'}
});
