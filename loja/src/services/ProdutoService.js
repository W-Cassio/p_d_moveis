import AsyncStorage from '@react-native-async-storage/async-storage'

const PRODUTOS_KEY = 'PRODUTOS'

async function salvar(produto) {
  const produtos = await listar()
  produto.id = Date.now().toString()
  produtos.push(produto)
  await AsyncStorage.setItem(PRODUTOS_KEY, JSON.stringify(produtos))
}

async function listar() {
  const dados = await AsyncStorage.getItem(PRODUTOS_KEY)
  return dados ? JSON.parse(dados) : []
}

async function atualizar(id, novoProduto) {
  const produtos = await listar()
  const index = produtos.findIndex(p => p.id === id)
  if (index >= 0) {
    produtos[index] = { ...novoProduto, id }
    await AsyncStorage.setItem(PRODUTOS_KEY, JSON.stringify(produtos))
  }
}

async function excluir(id) {
  const produtos = await listar()
  const novaLista = produtos.filter(p => p.id !== id)
  await AsyncStorage.setItem(PRODUTOS_KEY, JSON.stringify(novaLista))
}

export default { salvar, listar, atualizar, excluir }