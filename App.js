import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login'
import Register from'./screens/Register'

export default function App() {
  return (
    //<Login />
    <Register/>
   /* <View style={styles.container}>
      <Text>Başlangıç</Text>
      <StatusBar style="auto" />
    </View>*/
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/