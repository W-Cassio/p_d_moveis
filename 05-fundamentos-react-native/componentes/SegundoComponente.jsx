import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SegundoComponente() {
  return (
    <View>
      <Text style = {styles.textoGrande}>Segundo Componente</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textoGrande : {
      fontSize: 30,
      fontweight: 60,
      color: 'green'
  }
})
