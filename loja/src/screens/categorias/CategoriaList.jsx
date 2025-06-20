import { StyleSheet, Text, View, Alert, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { List, IconButton, FAB } from 'react-native-paper'
import CategoriaService from '../../services/CategoriaService'
import { useIsFocused } from '@react-navigation/native'

export default function CategoriaList({ navigation }) {
  const [categorias, setCategorias] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) carregar()
  }, [isFocused])

  async function carregar() {
    const data = await CategoriaService.listar()
    setCategorias(data)
  }

  function editar(categoria) {
    navigation.navigate('CategoriaForm', categoria)
  }

  function confirmarExclusao(id) {
    Alert.alert('Confirmação', 'Deseja excluir esta categoria?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Excluir', onPress: () => excluir(id), style: 'destructive' }
    ])
  }

  async function excluir(id) {
    await CategoriaService.excluir(id)
    carregar()
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={categorias}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.nome}
            description={item.descricao}
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
        onPress={() => navigation.navigate('CategoriaForm')}
      />
    </View>
  )
}
const styles = StyleSheet.create({})