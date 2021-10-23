import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer, createAppContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MessagesScreen from './screens/Messages';
import Icon from "react-native-vector-icons/FontAwesome";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Messages">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Messages" component={MessagesScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Messages">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} options={{ tabBarBadge: 3 }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const bottomTabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="map-location-dot" size={25} color={tintColor} />
//         )
//       }
//     },
//     Messages: {
//       screen: MessagesScreen,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="messages" size={25} color={tintColor} />
//         )
//       }
//     }
//   },
//   {
//     initialRouteName: 'Home',
//     tabBarOptions: {
//       activeTintColor: '#eb6e3d'
//     }
//   }
// );

// const AppContainer = createAppContainer(bottomTabNavigator);