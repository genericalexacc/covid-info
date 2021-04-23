import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Platform, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import Dash from 'react-native-dash';

//Testing view that shows home tests have been administered
function Testing() {
    // Web view that shows an iframe to another page which has the statistics for covid
    return <WebView source={{
        html: `
            <!DOCTYPE html>
            <html>
                <body>
                <iframe src="https://ourworldindata.org/grapher/full-list-cumulative-total-tests-per-thousand" style="width: 100%; height: 620px; border: 0px none;"></iframe>
                </body>
            </html>
        `,
    }} style={{ maxHeight:208, height:180, width:'80%', marginLeft:'10%',borderRadius: 10 }} />
}

// Deaths statistics tab
function Deaths() {
    // Web view that shows an iframe to another page which has the statistics for covid
    return <WebView source={{
        html: `
            <!DOCTYPE html>
            <html>
                <body>
                <iframe src="https://ourworldindata.org/explorers/coronavirus-data-explorer?tab=map&zoomToSelection=true&region=NorthAmerica&hideControls=true&Metric=Confirmed+deaths&Interval=Cumulative&Relative+to+Population=false&Align+outbreaks=false&country=~CAN" loading="lazy" style="width: 100%; height: 615px; border: 0px none;"></iframe>
                </body>
            </html>
        `,
    }} style={{ maxHeight:210, height:180, width:'80%', marginLeft:'10%', borderRadius: 10 }} />
}

//How many worldwide casses have been reported map
function Cases() {
    // Web view that shows an iframe to another page which has the statistics for covid
    return <WebView source={{
        html: `
            <!DOCTYPE html>
            <html>
                <body>
                <iframe src="https://ourworldindata.org/explorers/coronavirus-data-explorer?tab=map&zoomToSelection=true&hideControls=true&Metric=Confirmed+cases&Interval=Cumulative&Relative+to+Population=false&Align+outbreaks=false&country=~CAN" loading="lazy" style="width: 100%; height: 700px; border: 0px none;"></iframe>
                </body>
            </html>
        `,
    }} style={{ maxHeight:210, height:180, width:'80%', marginLeft:'10%', borderRadius: 10 }} />
}

//Newsfeed component
export default function Newsfeed({changePage} : any) {
  //render the component
  return (
      //anon shim
        <>
            {/* scrollable view for that overflow */}
            <ScrollView style={{height:'85%'}}>
                <View style={{marginBottom: 25}}></View>
                <View style={{...styles.container, marginBottom: 0, marginLeft: -10}}>
                    <Text style={{color: '#E7ECEF', fontWeight: 'bold', fontSize: 48, marginLeft: 30, marginBottom: 15}}>Newsfeed</Text>
                </View>
                {/* Dash to be pretty */}
                <Dash dashGap={5} dashLength={10} dashThickness={3} dashColor={'#F05D5E'} style={{width:900, height:1, marginLeft:2}}/>
                {/* Covid testing title */}
                <View style={styles.container}>
                    <Text style={styles.textColor}>COVID TESTING</Text>
                </View>
                {/* Testing view */}
                <Testing></Testing>
                {/* Deaths title */}
                <View style={styles.container}>
                    <Text style={styles.textColor}>Deaths in N.A.</Text>
                </View>
                {/* Deaths view */}
                <Deaths></Deaths>
                {/* Cases in the world tab */}
                <View style={styles.container}>
                    <Text style={styles.textColor}>Cases in World</Text>
                </View>
                {/* Cases view */}
                <Cases></Cases>
                {/* Spacer to be cute */}
                <View style={{marginBottom: 50}}></View>
            {/* End of the view */}
            </ScrollView>
        </>
  )
}

//Our super styles for this page :)
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
