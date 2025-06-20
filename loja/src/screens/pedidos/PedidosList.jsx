import { StyleSheet, Text, View, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FAB, List, IconButton } from 'react-native-paper'
import PedidoService from '../../services/PedidoService'
import { useIsFocused } from '@react-navigation/native'

export default function PedidosList() {
  const [pedidos, setPedidos] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) carregar()
  }, [isFocused])

  async function carregar() {
    const dados = await PedidoService.listar()
    setPedidos(dados)
  }

  function editar(pedido) {
    navigation.navigate('PedidoForm', pedido)
  }

  function confirmarExclusao(id) {
    Alert.alert('Confirmação', 'Deseja excluir este pedido?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Excluir', onPress: () => excluir(id), style: 'destructive' }
    ])
  }

  async function excluir(id) {
    await PedidoService.excluir(id)
    carregar()
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={pedidos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={`Cliente: ${item.clienteNome}`}
            description={`Total: R$ ${item.total.toFixed(2)}\nData: ${item.data}`}
            onPress={() => editar(item)}
            right={() => (
              <View style={{ flexDirection: 'row' }}>
                <IconButton icon="pencil" onPress={() => editar(item)} />
                <IconButton icon="delete" onPress={() => confirmarExclusao(item.id)} />
              </View>
            )}
          />
        )}
      />

      <FAB
        icon="plus"
        style={{ position: 'absolute', right: 16, bottom: 16 }}
        onPress={() => navigation.navigate('PedidoForm')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})