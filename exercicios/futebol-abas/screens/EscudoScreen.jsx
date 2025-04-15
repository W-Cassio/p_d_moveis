import React from "react";
import { StyleSheet } from "react-native";
import { PaperProvider, Card, Text } from "react-native-paper";

export default function EscudoScreen() {
  const time = {
    nome: "Flamengo",
    escudo:
      "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  };
  return (
    <PaperProvider>
      <Card style={{ flex: "100%" }}>
        <Text variant="headlineLarge">{time.nome}</Text>
      </Card >
      <Card.Cover style={{width: 360, height: 300}} source={{ uri: time.escudo }} />
    </PaperProvider>
  );
}
const styles = StyleSheet.create({});
