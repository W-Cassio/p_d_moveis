import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function PrimeiroComponente() {
  return (
    <View>
      <Text style = {styles.textoGrande}>Primeiro Componente 1111111</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    textoGrande : {
        fontSize: 40,
        fontweight: 60,
        color: 'red'
    }
})
