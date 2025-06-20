import { StyleSheet, Text, View, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FAB, List, IconButton } from 'react-native-paper'
import FornecedorService from '../../services/FornecedorService'
import { useIsFocused } from '@react-navigation/native'

export default function FornecedorList({ navigation }) {
  const [fornecedores, setFornecedores] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) carregar()
  }, [isFocused])

  async function carregar() {
    const data = await FornecedorService.listar()
    setFornecedores(data)
  }

  function editar(fornecedor) {
    navigation.navigate('FornecedorForm', fornecedor)
  }

  function confirmarExclusao(id) {
    Alert.alert('Confirmação', 'Deseja excluir este fornecedor?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Excluir', onPress: () => excluir(id), style: 'destructive' }
    ])
  }

  async function excluir(id) {
    await FornecedorService.excluir(id)
    carregar()
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={fornecedores}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.nome}
            description={`CNPJ: ${item.cnpj} - Tel: ${item.telefone}`}
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
        onPress={() => navigation.navigate('FornecedorForm')}
      />
    </View>
  )
}
const styles = StyleSheet.create({})