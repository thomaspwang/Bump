import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import styles from './styles';

export default function ChatItem({ prop }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: prop.profilepic }} />

            {<View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>10</Text>
            </View>}

            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>{prop.name}</Text>
                    <Text style={styles.text}>{prop.last_timestamp}</Text>
                </View>
                <Text numberofLines={1} style={styles.text}>{prop.last_message}</Text>
            </View>
        </View>
    );
}