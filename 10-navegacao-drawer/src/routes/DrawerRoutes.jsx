import { createDrawerNavigator } from "@react-navigation/drawer"
import React from "react"

import {Ionicons} from '@expo/vector-icons'

import HomeScrenn from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import  ConfigScren  from '../screens/ConfigScreen'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen 
        name='HomeScrenn' 
        component={HomeScrenn}
        options={{
          title: 'Início',
          drawerIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
        }}
        />

        <Drawer.Screen 
        name='ProfileScreen' 
        component={ProfileScreen} 
        options={{
          title: 'Início',
          drawerIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />
        }}
        />

        <Drawer.Screen 
        name='ConfigScren' 
        component={ConfigScren} 
        options={{
          title: 'Início',
          drawerIcon: ({ color, size }) => <Ionicons name="cog" color={color} size={size} />
        }}
        />
    </Drawer.Navigator>
  )
}
