import { Image, StyleSheet, Text, View } from 'react-native'
import { Button, Card } from 'react-native-paper'
import React from 'react'


export default function ReceitaScreen({navigation, route}) {

  const receita = route.params.item

  return (
    <View>
      <Card>
        <Card.Content>
          <Text>Nome: {receita.nome}</Text>
          <Text>Tempo de Preparo: {receita.tempoPreparo}</Text>
          <Text>Porções: {receita.porcoes}</Text>
          <Image
            source={{uri: receita.imagem}}
          />
          <Text>Ingredientes: {receita.ingredientes}</Text>
        </Card.Content>
        
        <Card.Actions>
          <Button
            mode='contained-tonal'
            icon='arrow-left'
            onPress={() => navigation.goBack()}
          >
            Voltar
          </Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})