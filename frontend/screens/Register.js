import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Button, ScrollView, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios'

import LoginImage from '../components/Login/LoginImage'

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [password2, setPassword2] = React.useState("");
    const [name, setName] = React.useState("");

  async function handleRegister () {
      await axios.post('https://d6ae-157-131-140-153.ngrok.io/api/auth/register', {
        name: name,
        email: email,
        password: password,
        password2: password2
      }).then(function (response) {
          // response includes userID, access token
            if (response.data.success) {
                // TODO: move to home page

                navigation.navigate('Login')
            }
            else if (response.data.email = "Email already exists") {
                navigation.navigate('Login')
            }
            else {
                // TODO: toasts?
                console.log("login failed")
            }
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView>
                    <SafeAreaView style={styles.view}>
                        <Text
                            style={{
                                fontWeight: '700',
                                fontSize: 60,
                                marginTop:100
                              }}
                        >
                            Register
                        </Text>
                        <Button
                            onPress={navigation.navigate('Home')}
                            title="Have an account?"
                            color="#841584"
                            accessibilityLabel="Have an account?"
                        />
                        <LoginImage />
                        <TextInput
                            style={styles.input}
                            onChangeText={setName}
                            value={name}
                            placeholder="Name"
                        />
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
                        <TextInput
                            style={styles.input}
                            onChangeText={setPassword2}
                            value={password2}
                            placeholder="Copy Password"
                        />
                        <Button
                            onPress={handleRegister}
                            title="Register"
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
      },
    container: {
        flex: 1
    },
});

export default RegisterScreen;