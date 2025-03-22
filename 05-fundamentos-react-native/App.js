import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SegundoComponente from './componentes/SegundoComponente';
import TerceiroComponente from './componentes/TerceiroComponente';
import JavascriptComponente from './componentes/javascriptComponente';
import Perfil from './componentes/Perfil';

export default function App() {



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PrimeiroComponente />
      <SegundoComponente />
      <TerceiroComponente />
      <JavascriptComponente />

      <Perfil
        nome="Wanderson"
        idade="16"
        email="wanderson@gmail.com"
      />
      <Perfil
        nome="Gustavo"
        idade="17"
        email="Gustavo@gmail.com"
      />
      <Perfil
        nome="João"
        idade="18"
        email="joao@gmail.com"
      />
      

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
