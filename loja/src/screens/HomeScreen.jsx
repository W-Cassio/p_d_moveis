// import { StyleSheet, View } from 'react-native'
// import React from 'react'
// import { Text, Button } from 'react-native-paper'

// export default function HomeScreen() {
//   return (
//     <View>
//       <Text variant="titleLarge">Bem-vindo à Loja!</Text>
//       <Button mode="contained" style={{ marginTop: 20 }}>Entrar</Button>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { FlatList, View, StyleSheet } from 'react-native'
import { Appbar, Card, Paragraph, Avatar } from 'react-native-paper'
import ProdutoService from '../services/ProdutoService'

export default function HomeScreen() {
  const [produtos, setProdutos] = useState([])

  // Carrega produtos do AsyncStorage toda vez que a tela ganha foco
  useFocusEffect(
    useCallback(() => {
      async function carregarProdutos() {
        const dados = await ProdutoService.listar()
        setProdutos(dados)
      }
      carregarProdutos()
    }, [])
  )

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title
        title={item.nome}
        subtitle={item.categoria}
        left={props => <Avatar.Icon {...props} icon="cube-outline" />}
      />
      <Card.Content>
        <Paragraph>{item.descricao}</Paragraph>
        <Paragraph>
          💰 R$ {Number(item.preco).toFixed(2)} | 🗃️ Estoque: {item.estoque}
        </Paragraph>
      </Card.Content>
    </Card>
  )

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Produtos em Estoque" />
      </Appbar.Header>

      <FlatList
        data={produtos}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 12
  },
  card: {
    marginBottom: 10
  }
})
