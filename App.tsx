import { StatusBar } from 'expo-status-bar';
import React, {useRef, useEffect, useState} from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

//Import pages and components
import Hello from './Hello'
import Signup from './Signup';
import NewsFeed from './NewsFeed'
import Location from './Location'
import Home from './Home'
import Activities from './Information';
import Settings from './Settings';
import NavBar from './Navbar'


//This is a fade in View that allows us to animate a component with the fade animation
const FadeInView = (props : any) => {
  //Get fade animation reference for DOM
  const fadeAnim = useRef(new Animated.Value(0)).current
  //Use effect to start the animation
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        //End value is 1
        toValue: 1,
        //Duration is 2 seconds
        duration: 2000,
        //Use native drivers for GPU acceleration or whatever this is
        useNativeDriver: true,
      } as any
      //Start the animation
    ).start();
    //Restart the use effect on fadeAnim state change
  }, [fadeAnim])

  //Render the animation view
  return (
    <Animated.View
    //cute styling
      style={{
        //Inherit props styling if needed
        ...props.style,
        backgroundColor: '#272932',
        opacity: fadeAnim,
      }}
    >
      {/* Props children */}
      {props.children}
    </Animated.View>
  );
}

//Pages for navigation maping from name to index in array
const pages = {
  'home': 3,
  'feed': 4,
  'activities': 5,
  'settings': 6,
}


//This is the entry point for the entire react app
export default function App() {
  //State for page index
  const [pageIndex, setPageIndex] = useState(0);
  //State for user location
  const [city, setLocation] = useState("");
  //State for user information like firstname and job etc.
  const [info, setInfo] = useState({});
  //The first page just says hello, so we need to switch from it to the next one after 3 seconds
  useEffect(() => {
    setTimeout(function () {
      setPageIndex(pageIndex + 1)
    }, 3000);
  }, []);

  //Array of different screens.
  /*
  Hello -> Page that just says hello with an emoji
  Location -> Get location from GPS coordinates
  Signup -> Page that collects info from user
  Home -> Home page with general information like curfew
  Newsfeed -> Page with up to date statistics
  Activities -> Page with vaccination information
  Settings -> Page to change username, password etc.
  */
  const screens = [
      <Hello/>, 
      <Location setLocation={setLocation} changePage={(word : string) => setPageIndex(2)} />, 
      <Signup setInfo={(name : any, Value : any)=>{
        let copy : any = info;
        copy[name] = Value;
        setInfo(copy)
      }} changePage={(word : string) => setPageIndex(3)} />,
      <Home />,
      <NewsFeed changePage={setPageIndex}/>,
      <Activities />,
      <Settings setInfo={setInfo} info={info} changePage={setPageIndex}/>,
  ]

  //Return the rendered app
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#272932'}}>
      <FadeInView key={pageIndex} style={{width: '100%', height: '100%', backgroundColor: '#272932'}}>
        {/* This is where we have the page, we get it from the array by using its index */}
        {screens[pageIndex]}
        {/* Navbar to be only displayed after the first 3 pages. */}
        {pageIndex > 2 ? <NavBar activeButton={pageIndex - 3} changePage={(page : any)=>{setPageIndex((pages as any)[page])}} /> : <></>}
      </FadeInView>
    </View>
  );
}