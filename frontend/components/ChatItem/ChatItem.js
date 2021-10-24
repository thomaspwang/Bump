import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import styles from './styles';

export default function ChatItem({ Friend }) {
    return (
        <View style={styles.container}>
            <Image source={require('./dummy.jpg')} style={styles.image} />

            {0 && <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>{notifCount}</Text>
            </View>}

            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>{Friend.name}</Text>
                    <Text style={styles.text}>4:20</Text>
                </View>
                <Text numberofLines={1} style={styles.text}>fuck</Text>
            </View>
        </View>
    );
}