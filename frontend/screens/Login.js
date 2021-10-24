import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Button, ScrollView, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from "react-native";
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
    <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView>
    <SafeAreaView
        style={styles.view}
    >
      <Text
        style={{
          fontWeight: '700',
          fontSize: 60,
          marginTop:150
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
        color="#000000"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
    </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 13,
    padding: 10,
    width:"70%"
  },
  view: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  }
});

export default LoginScreen;