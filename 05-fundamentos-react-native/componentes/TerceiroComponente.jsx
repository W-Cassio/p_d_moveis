import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TerceiroComponente() {
  return (
    <View>
      <Text style = {styles.texto}>Terceiro Componente</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    fontweight: 60,
    color: "yellow",
  },
});
