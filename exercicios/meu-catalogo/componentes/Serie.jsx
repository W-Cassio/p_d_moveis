import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Serie(props) {
  const { nome, ano, diretor, temporadas, capa } = props;
  return (
    <View>
      <Text style={styles.texto}>NOME: {nome}</Text>
      <Text style={styles.texto}>ANO: {ano}</Text>
      <Text style={styles.texto}>DIRETOR: {diretor}</Text>
      <Text style={styles.texto}>TEMPORADAS: {temporadas}</Text>


      <Image
        source={{
          uri: capa,
        }}
        style={{
          height: 300,
          width: 300,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    borderWidth: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  texto: {
    fontSize: 20,
    fontWeight: 600,
    textAlign: 'center'
  },
});
