import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function EscudoScreen() {
  const time = {
    nome: "Flamengo",
    escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
    fundacao: "15 de novembro de 1895",
    estadio: "Maracanã",
    mascote: "Urubu",
    cores: ["Vermelho", "Preto"]
    };
  return (
    <View>
      <Text>EscudoScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})