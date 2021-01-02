import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login'
import Register from'./screens/Register'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Ana from'./screens/Ana'
const AppNavigator = createStackNavigator({

  Register: {
  screen: Register,
    navigationOptions: {
      headerShown: false,
    },
  },

  Login: {
    navigationOptions: {
      headerShown: false,
    },
  screen: Login,
  },

  Ana: {
    screen: Ana,
      navigationOptions: {
        headerShown: false,
      },
    },
},

   
{
  initialRouteName: 'Login',
});

export default createAppContainer(AppNavigator);
/*export default function App() {
  return (
  // <Login />
    <Register/>
  );
}
*/