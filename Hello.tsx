import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

//The smallest component in the whole app, just says hello on a cute colored background
export default function Hello() {
  //Render the page
  return (
    <View style={styles.container}>
      {/* Use of emoji might not port well to other systems than iOS and MacOS */}
      <Text style={styles.textColor}>Hello 👋</Text>
    </View>
  );
}

//Stylesheet for this page.
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
});
