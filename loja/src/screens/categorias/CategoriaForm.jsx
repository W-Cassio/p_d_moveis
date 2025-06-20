import { StyleSheet, Text, View, ScrollView  } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button, HelperText, RadioButton } from 'react-native-paper'
import CategoriaService from '../../services/CategoriaService'

export default function CategoriaForm({ navigation, route }) {
  const categoriaAntiga = route.params || {}

  const [categoria, setCategoria] = useState({
    id: categoriaAntiga.id,
    nome: categoriaAntiga.nome || '',
    descricao: categoriaAntiga.descricao || ''
  })

  function handleChange(field, value) {
    setCategoria({ ...categoria, [field]: value })
  }

  async function salvar() {
    if (!categoria.nome) {
      alert('Preencha o nome da categoria.')
      return
    }

    if (categoria.id) {
      await CategoriaService.atualizar(categoria)
    } else {
      await CategoriaService.salvar(categoria)
    }

    navigation.goBack()
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        label="Nome"
        value={categoria.nome}
        onChangeText={value => handleChange('nome', value)}
        mode="outlined"
      />

      <TextInput
        label="Descrição"
        value={categoria.descricao}
        onChangeText={value => handleChange('descricao', value)}
        mode="outlined"
      />

      <Button mode="contained" onPress={salvar} style={{ marginTop: 16 }}>
        Salvar
      </Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16
  }
})