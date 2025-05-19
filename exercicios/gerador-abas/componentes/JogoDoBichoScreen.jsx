import { View } from 'react-native'
import React, { useState } from 'react'
import { Card, Button, Text } from 'react-native-paper';

export default function JogoDoBichoScreen() {

  const [animalGerado, setAnimalGerado] = useState({});
  
    function sortearAnimal() {
      const index = Math.floor(Math.random() * animais.length);
      setAnimalGerado(animais[index]);
    }
  

  
  return (
    <View>
      
    </View>
  )
}