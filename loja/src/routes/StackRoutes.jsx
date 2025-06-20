import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import DrawerRoutes from '../routes/DrawerRoutes';
import ProdutoForm from '../screens/produtos/ProdutoForm';
import CategoriaForm from '../screens/categorias/CategoriaForm'
import ClienteForm from '../screens/clientes/ClienteForm'
import FornecedorForm from '../screens/fornecedores/FornecedorForm'

const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} options={{ headerShown: false }} />
      <Stack.Screen name="ProdutoForm" component={ProdutoForm} options={{ title: 'Produto' }} />
      <Stack.Screen name="CategoriaForm" component={CategoriaForm} options={{ title: 'Categoria' }} />
      <Stack.Screen name="ClienteForm" component={ClienteForm} options={{ title: 'Cliente' }} />
      <Stack.Screen name="FornecedorForm" component={FornecedorForm} options={{ title: 'Fornecedores' }} />
    </Stack.Navigator>
  )
}
const styles = StyleSheet.create({})

