import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import { TextInputMask } from 'react-native-masked-text'
import FornecedorService from '../../services/FornecedorService'
import ViaCepService from '../../services/ViaCepService'

export default function FornecedorForm({ navigation, route }) {
  const fornecedorAntigo = route.params || {}

  const [fornecedor, setFornecedor] = useState({
    id: fornecedorAntigo.id,
    nome: fornecedorAntigo.nome || '',
    cnpj: fornecedorAntigo.cnpj || '',
    telefone: fornecedorAntigo.telefone || '',
    email: fornecedorAntigo.email || '',
    cep: fornecedorAntigo.cep || '',
    endereco: fornecedorAntigo.endereco || '',
    bairro: fornecedorAntigo.bairro || '',
    cidade: fornecedorAntigo.cidade || '',
    uf: fornecedorAntigo.uf || ''
  })

  function handleChange(field, value) {
    setFornecedor({ ...fornecedor, [field]: value })
  }

  async function buscarEnderecoPorCep() {
    if (!fornecedor.cep || fornecedor.cep.length < 8) return

    const endereco = await ViaCepService.buscarEndereco(fornecedor.cep)
    if (endereco) {
      setFornecedor({
        ...fornecedor,
        endereco: endereco.logradouro,
        bairro: endereco.bairro,
        cidade: endereco.localidade,
        uf: endereco.uf
      })
    }
  }

  async function salvar() {
    if (!fornecedor.nome || !fornecedor.cnpj || !fornecedor.telefone) {
      alert('Preencha os campos obrigatórios.')
      return
    }

    if (fornecedor.id) {
      await FornecedorService.atualizar(fornecedor)
    } else {
      await FornecedorService.salvar(fornecedor)
    }

    navigation.goBack()
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        label="Nome"
        value={fornecedor.nome}
        onChangeText={value => handleChange('nome', value)}
        mode="outlined"
      />

      <TextInput
        label="CNPJ"
        value={fornecedor.cnpj}
        onChangeText={value => handleChange('cnpj', value)}
        mode="outlined"
        keyboardType="numeric"
        render={props => <TextInputMask {...props} type={'cnpj'} />}
      />

      <TextInput
        label="Telefone"
        value={fornecedor.telefone}
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
        value={fornecedor.email}
        onChangeText={value => handleChange('email', value)}
        mode="outlined"
        keyboardType="email-address"
      />

      <TextInput
        label="CEP"
        value={fornecedor.cep}
        onChangeText={value => handleChange('cep', value)}
        onBlur={buscarEnderecoPorCep}
        mode="outlined"
        keyboardType="numeric"
      />

      <TextInput
        label="Endereço"
        value={fornecedor.endereco}
        onChangeText={value => handleChange('endereco', value)}
        mode="outlined"
      />

      <TextInput
        label="Bairro"
        value={fornecedor.bairro}
        onChangeText={value => handleChange('bairro', value)}
        mode="outlined"
      />

      <TextInput
        label="Cidade"
        value={fornecedor.cidade}
        onChangeText={value => handleChange('cidade', value)}
        mode="outlined"
      />

      <TextInput
        label="UF"
        value={fornecedor.uf}
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
