import { createDrawerNavigator } from "@react-navigation/drawer"
import React from "react"

import {Ionicons} from '@expo/vector-icons'

import EscudoScreen from '../screens/EscudoScreen'
import JogadoresScreen from '../screens/JogadoresScreen'
import TitulosScreen  from '../screens/TitulosScreen'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen 
        name='EscudoScreen' 
        component={EscudoScreen}
        options={{
          title: 'Escudos',
          drawerIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
        }}
        />

        <Drawer.Screen 
        name='JogadoresScreen' 
        component={JogadoresScreen} 
        options={{
          title: 'Jogadores',
          drawerIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />
        }}
        />

        <Drawer.Screen 
        name='TitulosScreen' 
        component={TitulosScreen} 
        options={{
          title: 'Titulos',
          drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />
        }}
        />
    </Drawer.Navigator>
  )
}
