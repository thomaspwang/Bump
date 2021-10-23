import React from "react";
//import { SafeAreaView, StyleSheet, TextInput } from "react-native";

import LoginImage from '../components/Login/LoginImage'

const LoginScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <SafeAreaView>
        <h1
            style={{
                fontWeight:'700'
            }}
        >
            Bump
        </h1>
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