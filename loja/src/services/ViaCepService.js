import axios from 'axios'

const BASE_URL = 'https://viacep.com.br/ws'

async function buscarEndereco(cep) {
  try {
    const response = await axios.get(`${BASE_URL}/${cep}/json`)
    if (response.data.erro) throw new Error('CEP não encontrado')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar CEP:', error)
    return null
  }
}

export default { buscarEndereco }