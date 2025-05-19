import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JogoDoBichoScreen from './componentes/JogoDoBichoScreen';
import MegaSenaScreen from './componentes/MegaSenaScreen';



const Tab = createBottomTabNavigator();

export default function App() {
  return (

     <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Mega Sena"
            component={MegaSenaScreen}
            options={{
              title: 'Mega Sena',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#6200ee',
              },
              headerTintColor: 'white',
              tabBarActiveTintColor: '#6200ee',  
              tabBarInactiveTintColor: 'gray', 
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Jogo do Bicho"
            component={JogoDoBichoScreen}
            options={{
              title: 'Jogo do Bicho',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#6200ee',
              },
              headerTintColor: 'white',
              tabBarActiveTintColor: '#6200ee',  
              tabBarInactiveTintColor: 'gray',  
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
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
