import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from 'react-native-paper';
import StackRoutes from './src/routes/StackRoutes';
import { temaPersonalizado } from './src/theme'; 

export default function App() {
  return (
   <PaperProvider theme={temaPersonalizado}>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
