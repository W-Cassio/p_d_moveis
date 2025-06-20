import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = '@clientes'

async function salvar(cliente) {
  const clientes = await listar()
  cliente.id = Date.now().toString()
  clientes.push(cliente)
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(clientes))
}

async function listar() {
  const json = await AsyncStorage.getItem(STORAGE_KEY)
  return json ? JSON.parse(json) : []
}

async function atualizar(cliente) {
  const clientes = await listar()
  const index = clientes.findIndex(c => c.id === cliente.id)
  clientes[index] = cliente
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(clientes))
}

async function excluir(id) {
  const clientes = await listar()
  const novos = clientes.filter(c => c.id !== id)
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(novos))
}

export default { salvar, listar, atualizar, excluir }