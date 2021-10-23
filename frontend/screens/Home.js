
import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';

function HomeScreen() {

  const state = {
    initialPosition: 'unknown',
    lastPosition: 'unknown',
  };

  const location = Geolocation.getCurrentPosition(
    console.log("Initial: " + this.state.initialPosition),
    console.log("Current: " + this.state.currentPosition),
    
    position => {
      const initialPosition = JSON.stringify(position);
      this.setState({initialPosition});
    },
    error => Alert.alert('Error', JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  );
  this.watchID = Geolocation.watchPosition(position => {
    const lastPosition = JSON.stringify(position);
    this.setState({lastPosition});
  });

  console.log("Initial: " + this.state.initialPosition);
  console.log("Current: " + location);


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text style={styles.title}>Initial position: </Text>
        {this.state.initialPosition}
        <Text style={styles.title}>Current position: </Text>
          {this.state.lastPosition}
      </View>
      
      
    );
  }

export default HomeScreen