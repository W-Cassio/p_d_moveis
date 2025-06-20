import AsyncStorage from '@react-native-async-storage/async-storage'

const CATEGORIAS_KEY = 'CATEGORIAS'

async function listar() {
  const dados = await AsyncStorage.getItem(CATEGORIAS_KEY)
  return dados ? JSON.parse(dados) : []
}

async function salvar(categoria) {
  const categorias = await listar()
  categoria.id = Date.now().toString()
  categorias.push(categoria)
  await AsyncStorage.setItem(CATEGORIAS_KEY, JSON.stringify(categorias))
}

async function atualizar(id, novaCategoria) {
  const categorias = await listar()
  const index = categorias.findIndex(c => c.id === id)
  if (index >= 0) {
    categorias[index] = { ...novaCategoria, id }
    await AsyncStorage.setItem(CATEGORIAS_KEY, JSON.stringify(categorias))
  }
}

async function excluir(id) {
  const categorias = await listar()
  const novaLista = categorias.filter(c => c.id !== id)
  await AsyncStorage.setItem(CATEGORIAS_KEY, JSON.stringify(novaLista))
}

export default { listar, salvar, atualizar, excluir }