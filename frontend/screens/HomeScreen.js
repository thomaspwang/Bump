import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

import {SafeAreaView, StyleSheet, StatusBar, View, Text} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import axios from 'axios'

MapboxGL.setAccessToken(
  'sk.eyJ1IjoiZW1tYWd1byIsImEiOiJja3Y0YjJiOGk4b3lzMnFxNjZ4bWZhcHp2In0.w8EqSYP60fMo6DVxYRcOcA',
);

export default function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [selectedPoint, setSelectedPoint] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log(location);
  }

    const onSelectPoint = event => {
        setCoordinates(event.geometry.coordinates);
        setSelectedPoint(event.properties.id);
        // TODO: navigate
      };
    // TODO: get user ID
    // get friends
    //const id = 'hi'
    //const friend_locs = await axios.get(process.env.REACT_APP_SERVER_URL + `?_id=${id}`)

  return (
    <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <View style={styles.container}>
              <MapboxGL.MapView style={styles.map}
              onPress={event => {
                setCoordinates(event.geometry.coordinates);
                setSelectedPoint(null);
              }}
              >
                <MapboxGL.Camera
                  zoomLevel={8}
                  centerCoordinate={[-94.5786, 39.0997]}
                />
                {
                    // have something where you click -- takes u to friend profile
                friend_locs.map((friend, index) => (
                    <MapboxGL.PointAnnotation
                        id={friend.name}
                        coordinate={friend.location}
                        onSelected={onSelectPoint}
                    />
                ))
                    
                }

              </MapboxGL.MapView>
              {coordinates ? (
            <View style={styles.coordinateViewContainer}>
              <View style={styles.coordinateView}>
                <Text>
                  {coordinates[0]}, {coordinates[1]}
                </Text>
              </View>
            </View>
          ) : null}
            </View>
          </SafeAreaView>
        </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
  coordinateViewContainer: {
      position: 'absolute',
      bottom: 0,
      padding: 5,
      width: '100%',
      backgroundColor: 'transparent',
    },
    coordinateView: {
      padding: 5,
      backgroundColor: '#fff',
      flex: 1,
    },
});
