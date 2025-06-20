import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = '@fornecedores'

async function salvar(fornecedor) {
  const fornecedores = await listar()
  fornecedor.id = Date.now().toString()
  fornecedores.push(fornecedor)
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(fornecedores))
}

async function listar() {
  const json = await AsyncStorage.getItem(STORAGE_KEY)
  return json ? JSON.parse(json) : []
}

async function atualizar(fornecedor) {
  const fornecedores = await listar()
  const index = fornecedores.findIndex(f => f.id === fornecedor.id)
  fornecedores[index] = fornecedor
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(fornecedores))
}

async function excluir(id) {
  const fornecedores = await listar()
  const novos = fornecedores.filter(f => f.id !== id)
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(novos))
}

export default { salvar, listar, atualizar, excluir }