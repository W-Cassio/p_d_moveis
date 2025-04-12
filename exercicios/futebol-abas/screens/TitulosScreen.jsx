import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TitulosScreen() {
    const titulos = [
        {
        nome: "Campeonato Brasileiro",
        anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020]
        },
        {
        nome: "Copa Libertadores da América",
        anos: [1981, 2019, 2022]
        },
        {
        nome: "Copa do Brasil",
        anos: [1990, 2006, 2013, 2022, 2024]
        },
        {
        nome: "Supercopa do Brasil",
        anos: [2020, 2021, 2025]
        },
        ];
  return (
    <View>
      <Text>TitulosScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})