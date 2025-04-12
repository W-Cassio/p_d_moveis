import { StyleSheet, View } from "react-native";
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
      <View>
        <Card style={{ margin: 10 }}>
          <Text>{time.nome}</Text>
          <Card.Cover
            source={{
              uri: { escudo },
            }}
          />
        </Card>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
