import { useCallback, useEffect, useState } from 'react'
import { Appearance, View } from 'react-native'
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import * as Font from 'expo-font'

const fontConfig = {
  fontFamily: 'Gilroy-Medium'
}

const darkTheme = {
  ...DefaultTheme,
  fonts: configureFonts({
    config: fontConfig
  }),
  colors: {
    ...DefaultTheme.colors,
    primary: '#447B3B',
    background: '#447B3B'
  }
}

export function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState(darkTheme)
  const [fontsLoaded] = Font.useFonts({
    'Gilroy-Light': require('../assets/fonts/Gilroy-Light.ttf'),
    'Gilroy-Regular': require('../assets/fonts/Gilroy-Regular.ttf'),
    'Gilroy-Medium': require('../assets/fonts/Gilroy-Medium.ttf'),
    'Gilroy-Bold': require('../assets/fonts/Gilroy-Bold.ttf'),
    'Gilroy-Heavy': require('../assets/fonts/Gilroy-Heavy.ttf')
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <PaperProvider theme={theme}>
      {children}
    </PaperProvider>
  )
}
