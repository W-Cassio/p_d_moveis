import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const nome = "Flamengo";

  function alerta() {
    alert("Gol, Ponto, Ace do Flamengo!!!");
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.texto}>{nome}</Text>
        <Text>
          Clube de Regatas do Flamengo (mais conhecido simplesmente como
          Flamengo, popularmente pelos apelidos de Fla, Mengo e Mengão, e cujo
          acrônimo é CRF) é uma agremiação poliesportiva brasileira com sede na
          cidade do Rio de Janeiro, capital do estado homônimo. Fundado no
          bairro do Flamengo[nota 1] para disputas do esporte remo em 17 de
          novembro de 1895,[2][11] tornou-se um dos clubes mais bem-sucedidos e
          populares do esporte brasileiro especialmente pelo futebol.{" "}
        </Text>
        <Text>Mascote Urubu Samuca Uruba e Urubinha Popeye</Text>
        <StatusBar style="auto" />
        <Image
          source={require("./imagens/Logo_Flamengo.png")}
          style={{
            height: 300,
            width: 300,
          }}
        />
        <Image
          source={{
            uri: "https://s2-oglobo.glbimg.com/vpVQD91mPb9yyKNeR4iTi8T-tHw=/0x0:799x533/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2025/8/w/HDCIFgT8erinOx4eeUNA/whatsapp-image-2025-03-16-at-17.03.22.jpeg",
          }}
          style={{
            height: 300,
            width: 300,
          }}
        />
        <Image
          source={{
            uri: "https://lncimg.lance.com.br/uploads/2024/03/flamengo-basquete-aspect-ratio-512-320.jpg",
          }}
          style={{
            height: 300,
            width: 300,
          }}
        />
        <Image
          source={{
            uri: "https://flamiami.com/wp-content/uploads/2019/04/1555179596.jpeg",
          }}
          style={{
            height: 300,
            width: 300,
          }}
        />
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG2D22CbJ7-aOxuLlXi6byIvCfxQeU8p3CPFznYkZDcf2cxUEeOHgYxZcyuu23O8_QIyY&usqp=CAU",
          }}
          style={{
            height: 300,
            width: 300,
          }}
        />
        <Button title="Gol, Ponto, Ace!!!" onPress={alerta}></Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    color: "red",
    fontSize: 60,
    fontWeight: 30,
  },
});
