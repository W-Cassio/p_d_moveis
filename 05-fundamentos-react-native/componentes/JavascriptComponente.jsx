import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function JavascriptComponente() {
  const nome = "Wanderson";
  const idade = 16;

  function checkMaiorIdade() {
    if(idade >= idade) {
        return "Maior idade"
    } else {
        return "Menor de idade"
    }
  }
  function alerta() {
    alert("Clicou no Botão!!")
  }

  return (
    <View>
      <Text>Javascript Componente</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Idade+40: {idade + 40}</Text>
      <Text>É maior de idade? {idade}</Text>
      <Text>Check 18+: {idade >= 18 ? "18+" : "18-"}</Text>
      <Button title='Clicar' onPress={alerta}></Button>

    </View>
  );
}

const styles = StyleSheet.create({});
