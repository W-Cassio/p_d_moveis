// imports
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

// Função que define o componente
// Retornar o que vai ser renderizado na tela (Template feito com JSX)
export default function App() {
  // lógica do meu componente
  const nome = "Gustavo"

  function alerta() {
    alert("Clicou no botão")
  }

  // retorno com o jsx
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image
        source={{
          uri: "https://www.cache2net3.com//Repositorio/251/Publicacoes/23883/3c2fd25f-c.jpg"
        }}

        style={{
          height: 400,
          width: 400
        }}
      
      />


      <Text>Texto dentro</Text>

      <Text>Bem vindo {nome}</Text>
      
      <Text>{2 + 2}</Text>

      <Button title='Clicar' onPress={alerta}></Button>


    </View>
  );
}

// estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});