import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios'
import {useAtom} from 'jotai'
import {idAtom} from '../atoms'

import LoginImage from '../components/Login/LoginImage'

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userID, setUserID] = useAtom(idAtom)

  async function handleLogin(){
      await axios.post('https://d6ae-157-131-140-153.ngrok.io/api/auth/login', {
        email: email,
        password: password
      }).then((response) => {
        if (response.data.success) {
            // TODO: move to home page
            console.log('login success')
            setUserID(response.data.id)
            navigation.navigate('LoggedIn')
        } else if (response.data.emailnotfound) {
            navigation.navigate('Register')
        }
      }).catch(error => {
          console.log(error)
      })
      /*
      console.log(login.data)
            if (login.data.success) {
                // TODO: move to home page
                console.log('login success')
                navigation.navigate('LoggedIn')
            } 
            else if (login.data.emailnotfound) {
                navigation.navigate('Register')
            }
            else {
                // TODO: toasts?
                console.log("login failed")
            }
    */
  }

  return (
    <SafeAreaView>
        <Text
            style={{
                fontWeight:'700'
            }}
        >
            Bump
        </Text>
        <LoginImage />
        <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
        />
        <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
        />
        <Button
            onPress={handleLogin}
            title="Login"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default LoginScreen;