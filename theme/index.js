import { Children, useEffect, useState } from 'react'
import { Appearance } from 'react-native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

const darkTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    background: 'black'
  }
}

export function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState(darkTheme)

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme === 'dark' ? darkTheme : DefaultTheme)
    })

    return () => {
      subscription.remove()
    }
  }, [])

  return (
    <PaperProvider theme={theme}>
      {children}
    </PaperProvider>
  )
}
