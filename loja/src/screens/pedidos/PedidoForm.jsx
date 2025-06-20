import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput, Button } from 'react-native-paper'
import DropDown from 'react-native-paper-dropdown'
import ClienteService from '../../services/ClienteService'
import PedidoService from '../../services/PedidoService'
import ProdutoService from '../../services/ProdutoService'
import { List, Checkbox } from 'react-native-paper'

export default function PedidoForm({ navigation, route }) {
  const pedidoAntigo = route.params || {}

  const [pedido, setPedido] = useState({
    id: pedidoAntigo.id,
    clienteId: pedidoAntigo.clienteId || '',
    clienteNome: pedidoAntigo.clienteNome || '',
    produtos: pedidoAntigo.produtos || [],
    total: pedidoAntigo.total || 0,
    data: pedidoAntigo.data || new Date().toLocaleDateString()
  })

  const [clientes, setClientes] = useState([])
  const [showDropCliente, setShowDropCliente] = useState(false)

  useEffect(() => {
    ClienteService.listar().then(setClientes)
  }, [])

  const opcoesClientes = clientes.map(c => ({
    label: c.nome,
    value: c.id
  }))

  function handleSelecionarCliente(id) {
    const clienteSelecionado = clientes.find(c => c.id === id)
    setPedido({
      ...pedido,
      clienteId: id,
      clienteNome: clienteSelecionado?.nome || ''
    })
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <DropDown
        label="Cliente"
        mode="outlined"
        visible={showDropCliente}
        showDropDown={() => setShowDropCliente(true)}
        onDismiss={() => setShowDropCliente(false)}
        value={pedido.clienteId}
        setValue={handleSelecionarCliente}
        list={opcoesClientes}
      />

      {/* Etapas 2 e 3 virão aqui em seguida */}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16
  }
})