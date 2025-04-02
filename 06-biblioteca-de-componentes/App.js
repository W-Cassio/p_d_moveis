import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider, Card, Title, Paragraph, Button, Divider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Button mode="contained" onPress={() => alert("Clicou")}>Clique aqui</Button>  
        <Button mode="contained.tonel">Clique aqui</Button>
        <Button icon="camera" mode="contained.tonel">Clique aqui</Button>
        <Button mode="elevated">Clique aqui</Button>
        <Button mode="outlined">Clique aqui</Button>
        <Button mode="text">Clique aqui</Button>

        <Text>Uva</Text>
        <Divider />
        <Text>Maça</Text>
        <Divider />
        <Text>Banana</Text>
        <Divider />
        <Text>Laranja</Text>
        <Divider />


        <Text variant="titleLarge">Um texto qualquer</Text>
        <Text variant='headlineLarge'>Um texto qualquer</Text>
        <Text variant="displayLarge">Um texto qualquer</Text>

        <Card>
          <Card.Content>
            <Title>Título do Card</Title>
            <Paragraph>Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer</Paragraph>
          </Card.Content>
          <Card.Cover
             source={{ uri: 'https://static.vecteezy.com/ti/fotos-gratis/t2/36324708-ai-gerado-cenario-do-uma-tigre-caminhando-dentro-a-floresta-foto.jpg'}}
          />
        </Card>

      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});
