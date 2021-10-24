import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer, createAppContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome";

// import './index.scss'

// import HomeScreen from './screens/HomeScreen.js'
import LoginScreen from './screens/Login.js'
import RegisterScreen from './screens/Register';
import MessagesScreen from './screens/MessagesScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// function LoggedIn({ navigation }) {
//   return (
//     <Tab.Navigator >
//       {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
//       <Tab.Screen name="Messages" component={MessagesScreen} options={{ tabBarBadge: 3 }} />
//     </Tab.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: true }} initialRouteName='Profile'>
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
        {/* <Stack.Screen name="LoggedIn" component={LoggedIn} /> */}
        {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
        <Tab.Screen name="Messages" component={MessagesScreen} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarBadge: 3 }} />
      </Tab.Navigator>
    </NavigationContainer>

  )
}