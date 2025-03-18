// Imports
import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

// Funçãp que representa o componente
export default function App() {
  // Lógica do componente
  const nome = "Wanderson"

  function  alerta() {
    alert("Cliclow ao botão!!!")
  }


  // Retorno dessa função com o template do que vai ser 
  // renderizado na tela (JSX)
  return (
    // ScrollView permite que o conteudo vá até depois da barra de rolagem
     // não pode ser usado sozinho, tem que ter uma View dentro
     // // ele só envolve o conteudo
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.textGrande}>Hello World</Text>
      <Text style={{fontSize:50, fontStyle: 'italic'}}>algum texto qualquer</Text>
      <Text>{nome}</Text>
       {/* comentário dentro do JSX */}
       {/*  */ }
       <Button title='Enviar' onPress={alerta}></Button>
      {/* <StatusBar style="auto" /> */}
      <Image
        source={{
          uri: 'https://www.designerd.com.br/wp-content/uploads/2019/04/imagens-blogs-chamar-atencao-publico-fb.jpg'
        }}
        style={{
          height: 300,
          width: 300
        }}

      />
        {/* Imagem de dentro do projeto  */}
      <Image
        source={require('./imagens/leao.jpg')}        
        style={{
          height: 300,
          width: 300
        }}

      />
       <Image
        source={require('./imagens/leao.jpg')}       
        style={{
          height: 300,
          width: 300
        }}

      />
      
    </View>
    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGrande: {
    color: 'red',
    fontSize: 60,
    fontWeight: 20
  }
});
