import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import ProdutoList from '../screens/produtos/ProdutoList';
import CategoriaList from '../screens/categorias/CategoriaList';
import ClienteList from '../screens/clientes/ClienteList'
import FornecedorForm from '../screens/fornecedores/FornecedorForm';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (  
     <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerType: 'slide',
      }}
    >
      <Drawer.Screen name="Início" component={HomeScreen} />
      <Drawer.Screen name="Produtos" component={ProdutoList} />
      <Drawer.Screen name="Categorias" component={CategoriaList} />
      <Drawer.Screen name="Clientes" component={ClienteList} />
      <Drawer.Screen name="Fornecedores" component={FornecedorForm} />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})