import { StyleSheet, Text, View, ScrollView  } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper'
import { TextInputMask } from 'react-native-masked-text'
import ClienteService from '../../services/ClienteService'
import ViaCepService from '../../services/ViaCepService'

export default function ClienteForm({ navigation, route }) {
  const clienteAntigo = route.params || {}

  const [cliente, setCliente] = useState({
    id: clienteAntigo.id,
    nome: clienteAntigo.nome || '',
    cpf: clienteAntigo.cpf || '',
    telefone: clienteAntigo.telefone || '',
    email: clienteAntigo.email || '',
    cep: clienteAntigo.cep || '',
    endereco: clienteAntigo.endereco || '',
    bairro: clienteAntigo.bairro || '',
    cidade: clienteAntigo.cidade || '',
    uf: clienteAntigo.uf || ''
  })

  function handleChange(field, value) {
    setCliente({ ...cliente, [field]: value })
  }

  async function buscarEnderecoPorCep() {
    if (!cliente.cep || cliente.cep.length < 8) return

    const endereco = await ViaCepService.buscarEndereco(cliente.cep)
    if (endereco) {
      setCliente({
        ...cliente,
        endereco: endereco.logradouro,
        bairro: endereco.bairro,
        cidade: endereco.localidade,
        uf: endereco.uf
      })
    }
  }

  async function salvar() {
    if (!cliente.nome || !cliente.cpf || !cliente.telefone) {
      alert('Preencha todos os campos obrigatórios.')
      return
    }

    if (cliente.id) {
      await ClienteService.atualizar(cliente)
    } else {
      await ClienteService.salvar(cliente)
    }

    navigation.goBack()
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        label="Nome"
        value={cliente.nome}
        onChangeText={value => handleChange('nome', value)}
        mode="outlined"
      />

      <TextInput
        label="CPF"
        value={cliente.cpf}
        onChangeText={value => handleChange('cpf', value)}
        mode="outlined"
        keyboardType="numeric"
        render={props => <TextInputMask {...props} type={'cpf'} />}
      />

      <TextInput
        label="Telefone"
        value={cliente.telefone}
        onChangeText={value => handleChange('telefone', value)}
        mode="outlined"
        keyboardType="phone-pad"
        render={props => (
          <TextInputMask
            {...props}
            type={'cel-phone'}
            options={{ maskType: 'BRL', withDDD: true, dddMask: '(99) ' }}
          />
        )}
      />

      <TextInput
        label="E-mail"
        value={cliente.email}
        onChangeText={value => handleChange('email', value)}
        mode="outlined"
        keyboardType="email-address"
      />

      <TextInput
        label="CEP"
        value={cliente.cep}
        onChangeText={value => handleChange('cep', value)}
        onBlur={buscarEnderecoPorCep}
        mode="outlined"
        keyboardType="numeric"
      />

      <TextInput
        label="Endereço"
        value={cliente.endereco}
        onChangeText={value => handleChange('endereco', value)}
        mode="outlined"
      />

      <TextInput
        label="Bairro"
        value={cliente.bairro}
        onChangeText={value => handleChange('bairro', value)}
        mode="outlined"
      />

      <TextInput
        label="Cidade"
        value={cliente.cidade}
        onChangeText={value => handleChange('cidade', value)}
        mode="outlined"
      />

      <TextInput
        label="UF"
        value={cliente.uf}
        onChangeText={value => handleChange('uf', value)}
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