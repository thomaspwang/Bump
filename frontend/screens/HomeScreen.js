import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

import {SafeAreaView, StyleSheet, StatusBar, View, Text, Dimensions} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import axios from 'axios'
import {useAtom} from 'jotai'
import {idAtom} from '../atoms'

export default function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [coordinates, setCoordinates] = useState([]);
  const [selectedID, setSelectedID] = useState("")
  const [region, setRegion] = useState(null)
  const [userID] = useAtom(idAtom)
  const [loading, setLoading] = useState(true)

  const centroid = {
    latitude: "24.2472",
    longitude: "89.920914"
}

  /*useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync().error(error => console.log('error'));
      if (status !== "granted") {
        console.log('cannot get perms')
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      if (location != null) {
        setLocation(location)
        setUserLocation()
      } else {
        setLocation(centroid)
      }
      //setRegion(location)
      setLoading(false)
    })();
  }, []);*/

  if (location == null) {
    console.log('set dummy location')
    setLocation(centroid)
  }

  useEffect(() => {
    /*
    (async () => {

      let location = await Location.getCurrentPositionAsync({});
      if (location != null) {
        setLocation(location)
        setUserLocation()
      } else {
        setLocation(centroid)
      }
      //setRegion(location)
      setLoading(false)
    })();
    */
    getFriendLocation();
    setUserLocation();
  })


  async function getFriendLocation() {
    await axios.get(`https://d6ae-157-131-140-153.ngrok.io/api/location/friends?_id=${userID}`).then(response => {
      setCoordinates(response.data)
    }).catch(error => console.log(error))
  }

  async function setUserLocation() {
    await axios.post(`https://d6ae-157-131-140-153.ngrok.io/api/location/user`, {
      _id: userID,
      location: {
        latitude: location.latitude,
        longitude: location.longitude
      }
      
    }).then(response => {
        const hi = response.data
    }).catch(error => console.log(error))
  }


    const onSelectPoint = event => {
      console.log(event)
        //setSelectedID(event.properties.id);
        // TODO: popup
      };

    function onRegionChange(region) {
      setRegion(region)
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
    console.log(coordinates)
  return (
    <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <View style={styles.container}>
              
<MapView style={styles.map}
provider = {PROVIDER_GOOGLE}
                region={region}
                onRegionChange={onRegionChange}   >

  

                { 
                    // have something where you click -- takes u to friend profile
                coordinates.map((friend, index) => (
                    <Marker
                        coordinate={{ latitude : friend.location.latitude, longitude : friend.location.longitude }}
                        image={{uri: friend.profilePic}}
                        onSelect={onSelectPoint}
                        key={friend.name}
                />
                ))
                    
                }
                
                <Marker
                        coordinate={{ latitude : 24.259769, longitude : 89.934692 }}
                        onSelect={onSelectPoint}
                        key="hi"
                    />

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
