import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Dice } from '../components/Dice'

  export default function Ana() {
  const randomFace = () => 1 + Math.round(Math.random() * 5); // random sayı 1 ile 6 arası
  const [face, setFace] = useState(randomFace()); // random bir yüz ile başlar
  const rollDice = () => setFace(randomFace());  // random bir yüze yuvarlanır

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={rollDice}>
        <Dice face={face} />
      </TouchableWithoutFeedback>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

 
