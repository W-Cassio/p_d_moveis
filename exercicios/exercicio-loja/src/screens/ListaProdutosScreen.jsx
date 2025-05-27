import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Avatar, Card, Text, Divider} from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';

export default function ListaProdutosScreen({ navigation, route }) {
  const { category } = route.params;
  const [produtos, setProdutos] = useState([]);
 

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${category}`)
      .then(resposta => {
        setProdutos(resposta.data.products);
      })
      .catch(erro => {
        console.error('Erro ao buscar produtos:', erro);
      });
  }, [category]);


  return (
    <View style={styles.container}>
      <Text variant="titleLarge" >
        {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
      </Text>
      
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card 
            style={styles.card}
            onPress={() => navigation.navigate('ProdutoScreen', { id: item.id })}

          >
            <Card.Content >
              <Avatar.Image 
                source={{ uri: item.thumbnail }} 
                size={60}
              />
              <View >
                <Text variant="titleMedium">{item.title}</Text>
                <Text variant="bodyMedium">${item.price}</Text>
                <Text variant="bodySmall" numberOfLines={1}>{item.description}</Text>
              </View>
              <Text>⭐ {item.rating}</Text>
            </Card.Content>
          </Card>
        )}
        ItemSeparatorComponent={() => <Divider  />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aquamarine',
    justifyContent: 'center',
  },
})