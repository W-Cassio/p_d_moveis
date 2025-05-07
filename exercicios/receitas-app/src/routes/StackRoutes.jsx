// import das telas
import HomeScreen from "../screens/HomeScreen";
import ReceitaScreen from "../screens/ReceitaScreen";


import { createStackNavigator } from "@react-navigation/stack";

// Criando stack
const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ReceitaScreen" component={ReceitaScreen} />

      {/* <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Início",
          headerTitleAlign: "center",
        }}
      /> */}


    </Stack.Navigator>
  );
}
