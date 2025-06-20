import React, { useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import { TextInput, Button, HelperText } from 'react-native-paper'
import ProdutoService from '../../services/ProdutoService'


export default function ProdutoForm({ navigation, route }) {
  const produtoAntigo = route.params || {}

  const [nome, setNome] = useState(produtoAntigo.nome || '')
  const [preco, setPreco] = useState(produtoAntigo.preco || '')
  const [descricao, setDescricao] = useState(produtoAntigo.descricao || '')
  const [categoria, setCategoria] = useState(produtoAntigo.categoria || '')
  const [estoque, setEstoque] = useState(produtoAntigo.estoque || '')

  function salvar() {
    const produto = { nome, preco, descricao, categoria, estoque }
    const camposVazios = Object.values(produto).some(campo => campo === '')
    if (camposVazios) return alert('Preencha todos os campos!')

    if (produtoAntigo.id) {
      ProdutoService.atualizar(produtoAntigo.id, produto).then(() => navigation.goBack())
    } else {
      ProdutoService.salvar(produto).then(() => navigation.goBack())
    }
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <TextInput label="Nome" value={nome} onChangeText={setNome} style={{ marginBottom: 8 }} />
      <TextInput
        label="Preço"
        value={preco}
        onChangeText={setPreco}
        render={props => <TextInputMask {...props} type="money" />}
        style={{ marginBottom: 8 }}
      />
      <TextInput label="Descrição" value={descricao} onChangeText={setDescricao} style={{ marginBottom: 8 }} />
      <TextInput label="Categoria" value={categoria} onChangeText={setCategoria} style={{ marginBottom: 8 }} />
      <TextInput label="Estoque" value={estoque} onChangeText={setEstoque} keyboardType="numeric" style={{ marginBottom: 8 }} />

      <Button mode="contained" onPress={salvar}>Salvar</Button>
    </ScrollView>
  )
}
const styles = StyleSheet.create({})