import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import Login from './screens/Login'
import Register from'./screens/Register'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Ana from'./screens/Ana'
import TabNavigation from './screens/TabNavigation'
import DrawNavigation from './screens/DrawNavigation'
import Giris from './screens/Giris'
import Bilgi from './screens/Bilgi'
//stack navigation
 
const AppNavigator = createStackNavigator({

  Register: {
  screen: Register,
    navigationOptions: {
      headerShown: false,
    },
  },
  Giris: {
    screen: Giris,
      navigationOptions: {
        headerShown: false,
      },
    },
    Bilgi: {
      screen: Bilgi,
        navigationOptions: {
          headerShown: false,
        },
      },

  TabNavigation: {
    screen: TabNavigation,
      navigationOptions: {
        headerShown: false,
      },
    },
    DrawNavigation: {
      screen: DrawNavigation,
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
}
);

 

export default createAppContainer(AppNavigator);
 

 