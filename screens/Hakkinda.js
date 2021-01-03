import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function Hakkinda() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hakkında </Text>
        <Text style={{ marginTop:40 }}>Günün zor şartlarından sıkılıp kafa dağıtmak için sende at bi zar ! </Text>
        <Text>Zar atmak için zarın üstüne basman yeterli. </Text>
      </View>
    );
  }