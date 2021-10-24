import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import styles from './styles';

export default function ChatItem({ Conversation, User, notifCount }) {
    return (
        <View style={styles.container}>
            <Image source={require('./dummy.jpg')} style={styles.image} />

            {chatRoom.newMessages && <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>{notifCount}</Text>
            </View>}

            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>{User.name}</Text>
                    <Text style={styles.text}>{Conversation.last_timestamp}</Text>
                </View>
                <Text numberofLines={1} style={styles.text}>{Conversation.last_message}</Text>
            </View>
        </View>
    );
}