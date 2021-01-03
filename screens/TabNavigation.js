import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ana from'./Ana'
import Hakkinda from './Hakkinda'
function ZarEkrani() {
  return (
   <Ana/>
  );
}

function HakkindaEkrani() {
  return (
   <Hakkinda/>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Ana Sayfa" component={ZarEkrani} />
        <Tab.Screen name="Hakkında" component={HakkindaEkrani} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}