import { Image, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Text, Card, Button } from 'react-native-paper';

export default function ProdutoScreen({ route, navigation }) {
  const { id } = route.params;
  const [produto, setProduto] = useState(null);
  

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => {
        setProduto(res.data);
        
      })
      .catch(err => {
        console.error('Erro ao buscar produto:', err);
        
      });
  }, [id]);


  if (!produto) {
    return (
      <View style={styles.loadingContainer}>
        <Text variant="titleLarge">Produto não encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card>
        <Card.Cover
         source={{ uri: produto.thumbnail }} 
         style={{ width: '100%', height: 350, borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
        />
        <Card.Content>
          <Text variant="titleLarge" >{produto.title}</Text>
          <Text variant="bodyMedium" >💲 {produto.price}</Text>
          <Text variant="bodySmall" >⭐ {produto.rating}</Text>
          <Text variant="bodyMedium" >{produto.description}</Text>
          <Text variant="bodySmall" >Categoria: {produto.category}</Text>
          <Text variant="bodySmall" >Marca: {produto.brand}</Text>
          <Text variant="bodySmall" >Estoque: {produto.stock}</Text>
        </Card.Content>
      </Card>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {produto.images.map((img, index) => (
          <Image
            key={index}
            source={{ uri: img }}
            resizeMode="cover"
          />
        ))}
      </ScrollView>

      <Button 
        mode="contained" 
        onPress={() => navigation.goBack()} 
      >
        Voltar
      </Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aquamarine',
    justifyContent: 'center',
  },
})