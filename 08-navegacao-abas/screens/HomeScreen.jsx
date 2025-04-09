import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, Card, Title, Paragraph } from 'react-native-paper'

export default function HomeScreen() {
  return (
    <View>
      <Text variant='headlineLarge' style={{ textAlign: 'center' }}>Tela de Início</Text>

      <Card style={{ width: '90%' }}>
        <Card.Content>
            <Title>Um titulo</Title>
            <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis tristique eros. Aliquam a fermentum arcu. Sed vitae nulla tempor, aliquet urna nec, suscipit ligula. Donec quis viverra orci. Etiam congue lorem vitae eros rhoncus, eget consectetur massa dapibus. Donec purus quam, sollicitudin ac arcu at, venenatis scelerisque ipsum. Suspendisse venenatis neque nec leo finibus, vel accumsan nibh sollicitudin. Proin dignissim nibh non dapibus sodales. Aliquam sit amet dui dictum justo consectetur congue. Nunc lacus massa, malesuada at lorem sed, posuere tincidunt nunc. In hac habitasse platea dictumst.
            </Paragraph>
        </Card.Content>
        <Card.Cover 
            source={{
                uri: 'https://cdn.pixabay.com/photo/2024/04/10/22/52/autumn-8688876_1280.jpg'
            }}
        />
      </Card>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    }
})