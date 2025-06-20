import { StyleSheet, Text, View, Alert, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import { List, IconButton, FAB } from 'react-native-paper'
import ClienteService from '../../services/ClienteService'
import { useIsFocused } from '@react-navigation/native'

export default function ClienteList({ navigation }) {
  const [clientes, setClientes] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) carregar()
  }, [isFocused])

  async function carregar() {
    const data = await ClienteService.listar()
    setClientes(data)
  }

  function editar(cliente) {
    navigation.navigate('ClienteForm', cliente)
  }

  function confirmarExclusao(id) {
    Alert.alert('Confirmação', 'Deseja excluir este cliente?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Excluir', onPress: () => excluir(id), style: 'destructive' }
    ])
  }

  async function excluir(id) {
    await ClienteService.excluir(id)
    carregar()
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={clientes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.nome}
            description={`CPF: ${item.cpf} - Tel: ${item.telefone}`}
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
        onPress={() => navigation.navigate('ClienteForm')}
      />
    </View>
  )
}
const styles = StyleSheet.create({})