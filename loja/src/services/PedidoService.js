import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = '@pedidos'

async function listar() {
  const json = await AsyncStorage.getItem(STORAGE_KEY)
  return json ? JSON.parse(json) : []
}

async function salvar(pedido) {
  const pedidos = await listar()
  pedido.id = Date.now().toString()
  pedidos.push(pedido)
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(pedidos))
}

async function atualizar(pedido) {
  const pedidos = await listar()
  const index = pedidos.findIndex(p => p.id === pedido.id)
  pedidos[index] = pedido
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(pedidos))
}

async function excluir(id) {
  const pedidos = await listar()
  const novos = pedidos.filter(p => p.id !== id)
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(novos))
}

export default { listar, salvar, atualizar, excluir }