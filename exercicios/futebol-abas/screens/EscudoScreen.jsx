import React from "react";
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
        <Text variant="labelMedium">{time.nome}</Text>
      </Card>
      <Card.Cover source={{ uri: time.escudo }} />
    </PaperProvider>
  );
}
