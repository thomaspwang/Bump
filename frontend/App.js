import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer, createAppContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome";

// import './index.scss'

import HomeScreen from './screens/HomeScreen.js'
import LoginScreen from './screens/Login.js'
import MessagesScreen from './screens/MessagesScreen.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Messages">
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} options={{ tabBarBadge: 3 }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}