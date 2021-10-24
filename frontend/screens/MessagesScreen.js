import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View, Image, Text, StyleSheet, FlatList } from 'react-native';
import ChatItem from '../components/ChatItem/ChatItem';
import axios from 'axios';
import { setGoogleApiKey } from 'expo-location';

const ngrok = 'http://6738-157-131-140-153.ngrok.io';

export default function MessagesScreen() {
  // const id = '617484bd5aacc003a9e6fa3e';
  // const endpoint = process.env.REACT_APP_SERVER_URL + '/api/location/friends' + `?_id=${id}`
  // const [friends, setFriends] = useState([])
  console.log("AWEAWDAHIWDIAWHDAWDAWIDHIAWDAHIWDIDIH")

  const id = '617447c0317bb912994c04ea';
  const [friendsList, setFriendsList] = useState([])
  const endpoint = ngrok + '/api/location/friends' + `?_id=${id}`



  useEffect(() => {
    getFriends();
  }, [])


  async function getFriends() {
    var friends;
    //console.log("endpoint")
    //console.log(endpoint)
    await axios.get(endpoint).then(result => {
      friends = result.data;

      //console.log(friends);
      var promises = []
      for (let i = 0; i < friends.length; i++) {
        let friend = friends[i]
        //console.log('friendId')
        //console.log(friend["_id"]);
        var endp = ngrok + '/api/message/conversation' + `?_id=${id}&friendid=${friend["_id"]}`
        //console.log('endp')
        //console.log(endp)

        promises.push(axios.get(endp))

      }

      Promise.all(promises).then(response => {
        //console.log("help")
        //console.log(response.data)
        for (let i = 0; i < friends.length; i++) {
          friends[i]['convo'] = response[i].data

        }
        setFriendsList(friends)


        //setFriendsList(friends)
      }).catch(error => {
        for (let i = 0; i < friends.length; i++) {
          friends[i]['convo'] = null
        }
        setFriendsList(friends)

        //friends['convo'] = null;
        //setFriendsList(friends)
      })

      //done = true;

    })
  }

  //while (done == false) {
  //  continue;
  //}


  /*
    const renderItem = ({ item }) => (
      <ChatItem
        name={item.name}
        timestamp={item['convo'] != null ? item['convo'].last_timestamp : null}
        message={item['convo'] != null ? item['convo'].last_message : null}
      />
    )*/
  // const Item = ({ title }) => (
  //   <View style={styles.page}>
  //     <Text><ChatItem name={title.name} /></Text>
  //   </View>
  // );
  var friends_array = [];
  for (let i = 0; i < friendsList.length; i++) {
    let friend = friendsList[i];
    let result = {}
    result['name'] = friend.name;
    result['last_message'] = friend['convo']['convo.last_message'];
    result['last_timestamp'] = friend['convo']['convo.last_timestamp'];
    friends_array.push(result);
  }

  // const renderItem = ({ item }) => (
  //   <ChatItem prop={item} />
  // );
  //console.log('friends 2')
  console.log(friendsList)
  console.log(friends_array)
  //console.log(renderItem)
  return (
    <View style={styles.page}>
      <FlatList
        data={friends_array}
        renderItem={({ item }) => <ChatItem prop={item} />}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  }
})