import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Card, PaperProvider, Title } from "react-native-paper";
export default function EscudoScreen() {
  const time = {
    nome: "Flamengo",
    escudo:
      "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
    fundacao: "15 de novembro de 1895",
    estadio: "Maracanã",
    mascote: "Urubu",
    cores: ["Vermelho", "Preto"],
  };
  return (
    <PaperProvider>
      <Card style={{ flex: "100%" }}>
      <Card.Cover
        style={{ width: 360, height: 300 }}
        source={{ uri: time.escudo }}
      /> 
        <Card.Content>
          <Text style={styles.texto}>{time.nome}</Text>
          <Text>Fundação: {time.fundacao}</Text>
          <Text>Estádio: {time.estadio}</Text>
          <Text>Mascote: {time.mascote}</Text>
          <Text>Cores: {time.cores.join(" e ")}</Text>
          </Card.Content>
      </Card>
      
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  texto: {
    fontSize: 40,
    fontWeight: "bold",
    padding: 20,
    textAlign: 'center'
  },
});
