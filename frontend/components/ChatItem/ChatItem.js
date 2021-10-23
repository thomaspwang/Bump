import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import styles from './styles';

export default function ChatItem({ name, img, message, time, badge }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: img }} style={styles.image} />
            <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>{badge}</Text>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.text}>{time}</Text>
                </View>
                <Text numberofLines={1} style={styles.text}>{message}</Text>
            </View>
        </View>
    );
}