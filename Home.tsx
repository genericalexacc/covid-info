import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Platform, KeyboardAvoidingView, ScrollView, TouchableOpacity, Alert, Linking } from 'react-native';
import Dash from 'react-native-dash';


//Notification tab
function NotifyZone(){
    //Render the component
    return (
        <View style={{maxHeight:208, padding: 15, paddingLeft: 15, marginTop: 50, width:'90%', marginLeft:'5%', borderRadius: 10, borderColor: '#88A2AA', borderStyle: 'solid', borderWidth: 3, backgroundColor: '#E7ECEF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Text style={{fontSize: 18, color: '#0F1A20'}}>Your city is in a <Text style={{color: 'red'}}>red</Text> zone.</Text>
            {/* On tap alert user that all is good */}
            <TouchableOpacity onPress={()=>{
                Alert.alert(
                    "Notification Set up",
                    "You will be notified when the situation in your region changes.",
                )
            }}>
                {/* What the button should actually look like */}
                <View style={{padding:20, borderRadius: 10, backgroundColor: '#D8A47F', justifyContent: 'center', display: 'flex', alignContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: 25}}>
                    <Text style={{color: 'white',}}>Notify me when zone color changes.</Text>
                </View>
                {/* End of button */}
            </TouchableOpacity>
        </View>
    )
}

// Curfew text box
function Curfew(){
    //Render the component
    return (
        <View style={{maxHeight:208, padding: 15, paddingLeft: 15, width:'90%', marginLeft:'5%', borderRadius: 10, borderColor: '#88A2AA', borderStyle: 'solid', borderWidth: 3, backgroundColor: '#E7ECEF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* These are just 3 text lines */}
            <Text style={{fontSize: 32, color: '#0F1A20'}}>⚠️ Curfew</Text>
            <Text style={{marginTop: 10, fontSize: 18, color: '#0F1A20'}}>Current curfew is 8PM to 5AM</Text>
            <Text style={{marginTop: 10, fontSize: 18, color: '#0F1A20'}}>You <Text style={{fontWeight: 'bold'}}>may not go</Text> outside of your house right now without authorization.</Text>
        </View>
    )
}

//Things that are open text box
function OpenThings(){
    //Render the component
    return (
        <View style={{maxHeight:208, padding: 15, paddingLeft: 15, marginTop: 50, width:'90%', marginLeft:'5%', borderRadius: 10, borderColor: '#88A2AA', borderStyle: 'solid', borderWidth: 3, backgroundColor: '#E7ECEF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* These are just 4 text lines */}
            <Text style={{fontSize: 18, color: '#0F1A20'}}>The following things are open:</Text>
            <Text style={{marginTop: 10, fontSize: 18, color: '#0F1A20'}}>✅ Takeout restaurants</Text>
            <Text style={{marginTop: 10, fontSize: 18, color: '#0F1A20'}}>❌ Cinemas</Text>
            <Text style={{marginTop: 10, fontSize: 18, color: '#0F1A20'}}>✅ National Parks</Text>
        </View>
    )
}

//Rules and regulations text box
function RulesAndRegulations(){
    //Render the component
    return (
        <View style={{maxHeight:208, padding: 15, paddingLeft: 15, marginTop: 50, width:'90%', marginLeft:'5%', borderRadius: 10, borderColor: '#88A2AA', borderStyle: 'solid', borderWidth: 3, backgroundColor: '#E7ECEF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* These are just 4 text lines */}
            <Text style={{fontSize: 24, color: '#0F1A20'}}>👮 Regulations and restrictions in your zone</Text>
            <Text style={{marginTop: 10, fontSize: 18, color: '#0F1A20'}}>▷ Wearing mask is mandatory inside of public spaces.</Text>
            <Text style={{marginTop: 10, fontSize: 18, color: '#0F1A20'}}>▷ Maintain a 6 feet distance between people while outside.</Text>
            <Text style={{marginTop: 10, fontSize: 18, color: '#0F1A20'}}>▷ Visiting other people is prohibited.</Text>
        </View>
    )
}

//Find nearest park to me
function FindParkNearby() {
    //Set up for maps search based on operating system of phone
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    //Latitude and Longitude of park
    const latLng = `45.450294726923346, -73.80583382553351`;
    //Label for park
    const label = 'Park';
    //Assemble the link
    const url = Platform.select({
        ios: `${scheme}${label}@${latLng}`,
        android: `${scheme}${latLng}(${label})`
    })

    //Render the component
    return (
        // Begin of the view
        <View style={{maxHeight:208, padding: 15, paddingLeft: 15, marginTop: 50, width:'90%', marginLeft:'5%', borderRadius: 10, borderColor: '#88A2AA', borderStyle: 'solid', borderWidth: 3, backgroundColor: '#E7ECEF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Title of the card */}
            <Text style={{fontSize: 18, color: '#0F1A20'}}>Find an open space you can visit outside of curfew hours.</Text>
            {/* On button press take the user to their default maps app on their phone */}
            <TouchableOpacity onPress={()=>{
                // Open as url will open the map app by default :)
                Linking.openURL(url as string)
            }}>
                {/* What the button should look like */}
                <View style={{padding:20, borderRadius: 10, backgroundColor: '#D8A47F', justifyContent: 'center', display: 'flex', alignContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: 25}}>
                    {/* Label of the button */}
                    <Text style={{color: 'white',}}>Find an open park nearby</Text>
                </View>
                {/* End of button */}
            </TouchableOpacity>
            {/* End of the view */}
        </View>
    )
}


//Export the whole page component so other components can use it
export default function Home({changePage} : any) {
    //Render the component
  return (
      //Anonymous react artifact to wrap everything together
        <>
            {/* Scrollview so that user can scroll on overflow */}
            <ScrollView style={{height:'85%'}}>
                {/* Spacer for aesthetics */}
                <View style={{marginBottom: 25}}></View>
                {/* Page title */}
                <View style={{...styles.container, marginBottom: 0, marginLeft: -10}}>
                    <Text style={{color: '#E7ECEF', fontWeight: 'bold', fontSize: 48, marginLeft: 30, marginBottom: 15}}>Home</Text>
                </View>
                {/* Dash so the app is cuter */}
                <Dash dashGap={5} dashLength={10} dashThickness={3} dashColor={'#F05D5E'} style={{width:900, height:1, marginLeft:2}}/>
                {/* Spacer for fun */}
                <View style={{marginBottom: 50}}></View>
                {/* Curfew tab */}
                <Curfew/>
                {/* Notify on zone change tab */}
                <NotifyZone/>
                {/* Rules and regulations tab */}
                <RulesAndRegulations/>
                {/* Things that are open tab */}
                <OpenThings/>
                {/* Open Google Maps to nearby park tab */}
                <FindParkNearby/>
                {/* End of the view */}
            </ScrollView>
            {/* End of anonymous shiv */}
        </>
  )
}

// Styling for this page
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
  inputStyle: { 
    fontWeight:'normal',
    marginTop:20,
    borderColor: 'transparent',
    borderBottomColor: '#DDD',
    borderStyle:'solid',
    borderWidth:1,
    paddingBottom: 10,
    paddingLeft: 7.5,
    fontSize: 16,
    width: 250,
    alignContent: 'center'
  }
});
