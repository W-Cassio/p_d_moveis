import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function JavascriptComponente() {
  const nome = "Gustavo Clay";
  const idade = 22;

  function CheckMaiorIdade() {
    console.log("Chamou a função Check Maior Idade");
    if ((idade) => 18) {
      return "Maior Idade";
    } else {
      return "Menor Idade";
    }
  }

  function alerta() {
    console.log("chamou a função alerta");
    alert("Clicou no Botão!");
  }

  return (
    <View style={styles.container}>
      <Text>Javascript Componente</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Idade+40: {idade + 40}</Text>
      <Text>18+: {CheckMaiorIdade()}</Text>
      <Button title="Clicar" onPress={alerta} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
  },
});
