import { StyleSheet, Text, View, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { List, FAB, IconButton } from 'react-native-paper'
import ProdutoService from '../../services/ProdutoService'
import { useIsFocused } from '@react-navigation/native'

export default function ProdutoList({ navigation }) {
  const [produtos, setProdutos] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    carregar()
  }, [isFocused])

  async function carregar() {
    const dados = await ProdutoService.listar()
    setProdutos(dados)
  }

  function editar(produto) {
    navigation.navigate('ProdutoForm', produto)
  }

  function confirmarExclusao(id) {
    Alert.alert('Confirmação', 'Deseja excluir este produto?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Excluir', onPress: () => excluir(id), style: 'destructive' }
    ])
  }

  async function excluir(id) {
    await ProdutoService.excluir(id)
    carregar()
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.nome}
            description={`Preço: R$ ${item.preco}`}
            onPress={() => editar(item)}
            right={() => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <IconButton icon="pencil" onPress={() => editar(item)} />
                <IconButton icon="delete" onPress={() => confirmarExclusao(item.id)} />
              </View>
            )}
          />
        )}
      />

      <FAB
        icon="plus"
        style={{
          position: 'absolute',
          right: 16,
          bottom: 16
        }}
        onPress={() => navigation.navigate('ProdutoForm')}
      />
    </View>
  )
}
const styles = StyleSheet.create({})