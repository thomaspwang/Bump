import React, {useEffect, useState} from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Avatar } from "react-native-elements";

export default function ProfileScreen() {
    [friends, setFriends] = useState([])
    useEffect(() =>{
        getFriends()
    })


    async function getFriends(){
        await axios.get(process.env.REACT_APP_SERVER_URL + `/api/location/friends?_id=${id}`).then(response => {
            setFriends(response.data)
        }
            )
    }

    function Friend({name, picture}) {
        return (
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
                source={picture}
                title="P"
                titleStyle={{}}
            />
            <View style={styles.textContainer}>
                <View>
                    <Text style={styles.heading}>
                        {name}
                    </Text>
                </View>
            </View>
        </View>
        )
    }

    return (
        <View>
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
                source={require('./dummy.jpg')}
                title="P"
                titleStyle={{}}
            />
            <View style={styles.textContainer}>
                <View>
                    <Text style={styles.heading}>
                        Emma Guo
                    </Text>
                </View>
                <Text style={styles.smallText}>
                    ID: 2310231230
                </Text>
            </View>
        </View>
        {
            friends.map((friend, index) => {
                <Friend 
                    name ={friend.name}
                    picture={friend.profilePic}
            />
            })
        }
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: '600',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
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
        top: "5%",
        marginLeft: 30,
        flexShrink: 1
    },
    background: {
        backgroundColor: "#F5ECDF"
    }
});