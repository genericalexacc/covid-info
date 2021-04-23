import { StatusBar } from 'expo-status-bar';
import React, {useRef, useEffect, useState} from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

//Navigation bar component
export default function NavBar({activeButton, changePage} : any) {
    //Render the component
    return <View style={{height: 80, display: 'flex', justifyContent: 'space-evenly', flexDirection:'row', borderTopColor: '#F05D5E', borderStyle:'solid', borderTopWidth: 3}}>
        {/* Home button */}
        <TouchableOpacity style={{padding: 25, paddingTop: 10}} onPress={()=>changePage('home')}>
            {/* Home button icon */}
            <Ionicons name="ios-home" size={24} color={activeButton === 0 ? "#D8A47F" : "#E7ECEF"} />
        </TouchableOpacity>

        {/* Newsfeed button */}
        <TouchableOpacity style={{padding: 25, paddingTop: 10}} onPress={()=>changePage('feed')}>
            {/* Newsfeed button icon */}
            <Ionicons name="newspaper-outline" size={24} color={activeButton === 1 ? "#D8A47F" : "#E7ECEF"} />
        </TouchableOpacity>

        {/* Information button */}
        <TouchableOpacity style={{padding: 25, paddingTop: 10}} onPress={()=>changePage('activities')}>
            {/* Information button icon */}
            <MaterialIcons name="local-activity" size={24} color={activeButton === 2 ? "#D8A47F" : "#E7ECEF"} />
        </TouchableOpacity>

        {/* Settings button */}
        <TouchableOpacity style={{padding: 25, paddingTop: 10}} onPress={()=>changePage('settings')}>
            {/* Settings button icon */}
            <Ionicons name="settings" size={24} color={activeButton === 3 ? "#D8A47F" : "#E7ECEF"} />
        </TouchableOpacity>
        {/* End of the view */}
    </View>
  }