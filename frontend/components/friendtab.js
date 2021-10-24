import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Avatar, SearchBar } from "react-native-elements";

export default function Friendtab({ name, link }) {
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
                source={{ uri: link }}
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

const styles = StyleSheet.create({
    total: {
        backgroundColor: '#F5ECDF'
    },
    heading: {
        fontSize: 18,
        fontWeight: '600',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 25,
        paddingVertical: 10,
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
        top: "10%",
        marginLeft: 25,
        flexShrink: 1
    },
    background: {
        backgroundColor: "#F5ECDF"
    }
});