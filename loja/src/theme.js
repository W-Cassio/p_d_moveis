import { MD3LightTheme as DefaultTheme } from 'react-native-paper'

export const temaPersonalizado = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1976D2',      // Azul forte
    secondary: '#FFC107',    // Amarelo
    background: '#F5F5F5',   // Cinza claro
    surface: '#FFFFFF',
    error: '#D32F2F',
    onPrimary: '#FFFFFF',
    onSecondary: '#000000',
    onSurface: '#000000',
  },
  roundness: 10, // cantos arredondados
}
