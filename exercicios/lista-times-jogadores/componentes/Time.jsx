import { StyleSheet,FlatList } from 'react-native'
import React from 'react'
import Jogador from './Jogador'
import { Card, Text } from 'react-native-paper'

export default function Time(props) {
    const { nome, anoFundacao, mascote, imagem, jogadores } = props
  return (
    <Card style={{margin: 10}}>
            <Card.Title title={nome} />
            <Card.Content>
                <Text>Fundação: {anoFundacao}</Text>
                <Text>Mascote: {mascote}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: imagem }}/>
            <Card.Actions>
                <FlatList
                    horizontal
                    data={jogadores}
                    renderItem={({item}) =>(
                        <Jogador
                            nome={item.nome}
                            numero={item.numero}
                            imagem={item.imagem}
                        />
                    )}
                />
            </Card.Actions>

        </Card>
  )
}

const styles = StyleSheet.create({})