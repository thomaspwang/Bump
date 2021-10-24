import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Button} from 'react-native';
import { Avatar, SearchBar } from "react-native-elements";

export default function Popup({name, image, id}) {

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
                    source={{ uri: image }}
                    title="P"
                    titleStyle={{}}
                />
                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.heading}>
                            {name}
                        </Text>
                    </View>
                    <Text style={styles.smallText}>
                        {id}
                    </Text>
                    <Button
                    title="Send Notification"
                    color="#000000"
                />
                </View>
            </View>
            </View>
    )}

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
    },
    button: {
        borderWidth:1,
        borderRadius:13
    }
})