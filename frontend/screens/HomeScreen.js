import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { Avatar, SearchBar, Button } from "react-native-elements";

import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  Dimensions,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import axios from "axios";
import { useAtom } from "jotai";
import { idAtom } from "../atoms";

import Popup from "./Popup";

export default function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [coordinates, setCoordinates] = useState([]);
  const [selectedID, setSelectedID] = useState("");
  const [region, setRegion] = useState(null);
  const [userID] = useAtom(idAtom);
  const [loading, setLoading] = useState(true);

  const centroid = {
    latitude: "24.2472",
    longitude: "89.920914",
  };

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
    console.log("set dummy location");
    setLocation(centroid);
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
  });

  async function getFriendLocation() {
    await axios
      .get(
        `https://d6ae-157-131-140-153.ngrok.io/api/location/friends?_id=${userID}`
      )
      .then((response) => {
        setCoordinates(response.data);
      })
      .catch((error) => console.log(error));
  }

  async function setUserLocation() {
    await axios
      .post(`https://d6ae-157-131-140-153.ngrok.io/api/location/user`, {
        _id: userID,
        location: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
      })
      .then((response) => {
        const hi = response.data;
      })
      .catch((error) => console.log(error));
  }

  const onSelectPoint = (event) => {
    console.log(event);
    //setSelectedID(event.properties.id);
    // TODO: popup
    return <Popup />;
  };

  function onRegionChange(region) {
    setRegion(region);
  }
  const boundingBox = {
    southWest: {
      latitude: "24.234631",
      longitude: "89.907127",
    },
    northEast: {
      latitude: "24.259769",
      longitude: "89.934692",
    },
  };
  const { width, height } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;
  const northeastLat = parseFloat(boundingBox.northEast.latitude);
  const southwestLat = parseFloat(boundingBox.southWest.latitude);
  const latDelta = northeastLat - southwestLat;
  const lngDelta = latDelta * ASPECT_RATIO;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style = {styles.rel}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            onPress={event => {
              onRegionChange={onRegionChange}
              region={region}
            }}
            provider={PROVIDER_GOOGLE}
          >
            {
              // have something where you click -- takes u to friend profile
              coordinates.map((friend, index) => (
                <Marker
                  coordinate={{
                    latitude: friend.location.latitude,
                    longitude: friend.location.longitude,
                  }}
                  image={{ uri: "https://imgur.com/a/bJqk4Dr" }}
                  onSelect={onSelectPoint}
                  title={friend.name}
                />
              ))
            }

            <Marker
              coordinate={{ latitude: 37.8719, longitude: -122.2585 }}
              onSelect={onSelectPoint}
            />
            <Marker
              coordinate={{ latitude: 37.8718, longitude: -122.2586 }}
              onSelect={onSelectPoint}
            />
            <Marker
              coordinate={{ latitude: 37.8717, longitude: -122.2584 }}
              onSelect={onSelectPoint}
            />
            <Marker
              coordinate={{ latitude: 37.8714, longitude: -122.2588 }}
              onSelect={onSelectPoint}
            />
          </MapView>
        </View>
      </SafeAreaView>

      <View style={styles.total}>
            <View style={[styles.card, styles.shadowProp]}>
                <Avatar
                    activeOpacity={0.2}
                    avatarStyle={{}}
                    containerStyle={{
                        backgroundColor: "#CBDFBD",
                        alignSelf: 'center',
                    }}
                    icon={{}}
                    iconStyle={{}}
                    imageProps={{}}
                    onLongPress={() => alert("onLongPress")}
                    onPress={() => alert("onPress")}
                    overlayContainerStyle={{}}
                    placeholderStyle={{}}
                    rounded
                    size="large"
                    // source={{ uri: "" }}
                    source={{ uri: 
                      "https://i.imgur.com/3GyANon.jpg" }}
                    title="P"
                    titleStyle={{}}
                />
                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.heading}>
                            Thomas Wang
                        </Text>
                    </View>
                    <Button
                    title="Bump!"
                    color="#000000"
                />
                </View>
            </View>
            </View>
            </View>
    </>
  );
}

const styles = StyleSheet.create({
  safe: {
    position: "absolute"
  },
  rel: {
    position: "relative"
  },
  container: {
    height: "100%",
    width: "100%",
  },
  map: {
    flex: 1,
  },
  coordinateViewContainer: {
    position: "absolute",
    bottom: 0,
    padding: 5,
    width: "100%",
    backgroundColor: "transparent",
  },
  coordinateView: {
    padding: 5,
    backgroundColor: "#fff",
    flex: 1,
  },
  total: {
    backgroundColor: '#F5ECDF',
    zIndex:10,
    position: 'absolute'
},
heading: {
    fontSize: 28,
    fontWeight: '600',
},
card: {
    backgroundColor: 'white',
    borderRadius: 50,
    paddingVertical: 60,
    paddingHorizontal: 50,
    width: '80%',
    marginVertical: 10,
    alignSelf: 'center',
    flexDirection: 'row'
},
shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
},
smallText: {
    fontSize: 12,
    fontWeight: '400',
    marginVertical: 10,
    width: '100%'
},
textContainer: {
    flexDirection: 'column',
    top: "1%",
    marginLeft: 25,
    flexShrink: 1
},
background: {
    backgroundColor: "#F5ECDF"
},
mostBumped: {
    flexDirection: 'column',
    top: "1%",
    marginLeft: 25,
    flexShrink: 1,
    alignSelf: 'center'
},
bumpcard: {
    backgroundColor: '#CBDFBD',
    borderRadius: 50,
    paddingVertical: 2,
    paddingHorizontal: 25,
    width: '60%',
    marginVertical: 10,
    alignSelf: 'center',
    flexDirection: 'row'
},
extrasmall: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    width: '100%',
    alignSelf: 'center'
},
});
