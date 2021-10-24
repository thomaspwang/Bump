import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Avatar } from "react-native-elements";

export default function ProfileScreen() {
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
                <Button
                    title="Send Notification"
                    color="#000000"
                />
            </View>
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
    },
    button: {
        borderColor="#000000",
        borderRadius=13
    }
});