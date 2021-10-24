import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

import {SafeAreaView, StyleSheet, StatusBar, View, Text, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import axios from 'axios'
import {useAtom} from 'jotai'
import {idAtom} from '../atoms'

export default function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [coordinates, setCoordinates] = useState([]);
  const [selectedID, setSelectedID] = useState("")
  const [userID] = useAtom(idAtom)

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log('cannot get perms')
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(local)
      setLocation(location)
    })();

    getFriendLocation();
  }, []);

  async function getFriendLocation() {
    await axios.get(`https://d6ae-157-131-140-153.ngrok.io/api/location/friends?_id=${userID}`).then(response => {
      setCoordinates(response.data)
    }).catch(error => console.log(error))
  }

  console.log(location)

    const onSelectPoint = event => {
      console.log(event)
        //setSelectedID(event.properties.id);
        // TODO: popup
      };

    function onRegionChange(region) {
      setState({ location });
    }

    const centroid = {
      latitude: "24.2472",
      longitude: "89.920914"
  }
  const boundingBox = {
      southWest: {
          latitude: "24.234631",
          longitude: "89.907127"
      },
      northEast: {
          latitude: "24.259769",
          longitude: "89.934692"
      }
  }
  const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const northeastLat = parseFloat(boundingBox.northEast.latitude);
    const southwestLat = parseFloat(boundingBox.southWest.latitude);
    const latDelta = northeastLat - southwestLat;
    const lngDelta = latDelta * ASPECT_RATIO;
  return (
    <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <View style={styles.container}>
              <MapView style={styles.map}
              onPress={event => {
                region={location}
                onRegionChange={onRegionChange}
              }}
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: latDelta,
                longitudeDelta: lngDelta,
              }}
              >

                { /*
                    // have something where you click -- takes u to friend profile
                coordinates.map((friend, index) => (
                    <Marker
                        coordinate={{ latitude : friend.location.latitude, longitude : friend.location.longitute }}
                        image={{uri: friend.image}}
                        onSelect={onSelectPoint}
                        title={friend.name}
                    />
                ))
                    
                */}

              </MapView>
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
