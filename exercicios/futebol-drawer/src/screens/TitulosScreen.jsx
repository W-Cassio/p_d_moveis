import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, Title } from "react-native-paper";

export default function TitulosScreen() {
  const titulos = [
    {
      nome: "Campeonato Brasileiro",
      anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020],
    },
    {
      nome: "Copa Libertadores da América",
      anos: [1981, 2019, 2022],
    },
    {
      nome: "Copa do Brasil",
      anos: [1990, 2006, 2013, 2022, 2024],
    },
    {
      nome: "Supercopa do Brasil",
      anos: [2020, 2021, 2025],
    },
  ];
  return (
    <FlatList
       style={{ width: "100%" }}
        data={titulos}
        renderItem={({ item }) => (
          <Card style={{ width: "90%", margin: 10 }}>
            <Title>{item.nome}</Title>
            <Text>Ano: {item.anos.join(", ")}</Text>
          </Card>
        )}
      />
  );
}

const styles = StyleSheet.create({
  
});
