import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Text} from 'react-native-paper';

export default function HomeScreen({navigation}) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/category-list")
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar categorias:", error);
      });
  }, []);


  return (
    <View style={styles.container}>
      <FlatList
        data={categorias}
        renderItem={({ item }) => (
          <Card 
            style={{ margin: 8 }}
            onPress={() => navigation.navigate('ListaProdutosScreen', { category: item })}
          >
            <Card.Content >
              <Text variant='displaySmall'>{item}</Text>
            </Card.Content>
          </Card>
        )}
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
});