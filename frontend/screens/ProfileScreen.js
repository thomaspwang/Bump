import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Avatar, SearchBar } from "react-native-elements";
import Friendtab from '../components/friendtab.js'

export default function ProfileScreen() {

    [friends, setFriends] = useState([])
    useEffect(() => {
        getFriends()
    })


    async function getFriends() {
        await axios.get(process.env.REACT_APP_SERVER_URL + `/api/location/friends?_id=${id}`).then(response => {
            setFriends(response.data)
        }
        )
    }

    function Friend({ name, picture }) {
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

    const [value, setValue] = React.useState("");

    return (
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
                    source={{ uri: 'https://i.imgur.com/RXCIqcq.jpg' }}
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
            <SearchBar
                platform="default"
                containerStyle={{ backgroundColor: "#F5ECDF" }}
                inputContainerStyle={{ backgroundColor: 'white' }}
                inputStyle={{}}
                leftIconContainerStyle={{}}
                rightIconContainerStyle={{}}
                lightTheme
                loadingProps={{}}
                onChangeText={newVal => setValue(newVal)}
                onClearText={() => console.log(onClearText())}
                placeholder="Find a friend!"
                placeholderTextColor="#888"
                round
                cancelButtonTitle="Cancel"
                cancelButtonProps={{}}
                onCancel={() => console.log(onCancel())}
                value={value} />
            <View style={[styles.bumpcard, styles.shadowProp]}>
                <View style={styles.mostBumped}>
                    <View>
                        <Text style={styles.extrasmall}>
                            Most Bumped!
                        </Text>
                    </View>

                </View>
            </View>
            <Friendtab
                name='Jillian Goldberg'
                link='https://i.imgur.com/RXCIqcq.jpg'
            ></Friendtab>
            <Friendtab
                name='Thomas Wang'
                link='https://i.imgur.com/3GyANon.jpg'
            ></Friendtab>
            <Friendtab
                name='Jeremy Li'
                link='https://i.imgur.com/ak7GCjV.jpg'
            ></Friendtab>
        </View>
    )
}

const styles = StyleSheet.create({
    total: {
        backgroundColor: '#F5ECDF'
    },
    heading: {
        fontSize: 28,
        fontWeight: '600',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 50,
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
    }
})