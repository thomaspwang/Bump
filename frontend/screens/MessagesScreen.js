import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View, Image, Text, StyleSheet, FlatList } from 'react-native';
import ChatItem from '../components/ChatItem/ChatItem';
import axios from 'axios';

export default async function MessagesScreen() {
  // const id = '617484bd5aacc003a9e6fa3e';
  // const endpoint = process.env.REACT_APP_SERVER_URL + '/api/location/friends' + `?_id=${id}`
  // const [friends, setFriends] = useState([])

  const id = '617484bd5aacc003a9e6fa3e';
  var friends;

  async function getFriends() {
    await axios.get(process.env.REACT_APP_SERVER_URL + 'api/location/friends' + `?_id=${id}`).then(result => {
      friends = result.data;

      console.log(result.data);

      for (friend in friends) {
        console.log(friend);
        await axios.get(process.env.REACT_APP_SERVER_URL + 'api/message/conversation' + `?_id=${id}&friendid=${friend.id}`).then(response => {
          friends['convo'] = response.data;
        }).catch(error => {
          console.log(error);
        })
      }

      console.log(friends);


      //     return (
      //       <View style={styles.page}>
      //         {/* <FlatList
      //         data={friends}
      //         renderIteum={({ item }) => <ChatItem friend={item} />}
      //       /> */}
      //       </View>
      //     );
      //   }).catch(error => {
      //     console.log(error);
      //   })
      // };
    }

// const styles = StyleSheet.create({
//       page: {
//         backgroundColor: 'white',
//         flex: 1
//       }
// });