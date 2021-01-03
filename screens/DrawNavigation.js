import * as React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Ana from'./Ana'
import Hakkinda from'./Hakkinda'
import Giris from './Giris'
import Bilgi from './Bilgi'

function EkranGiris() {
  return (
   <Ana/>
  );
}

function EkranBilgi() {
  return (
    <Hakkinda/>
  );
}

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
     <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Ana" component={EkranGiris} />
        <Drawer.Screen name="Hakkinda" component={EkranBilgi} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}