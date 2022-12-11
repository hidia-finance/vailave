import React, { useContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MainBottomTabsNavigator } from './navigator/MainBottomTabsNavigator'
import LoginScreen from './screens/LoginScreen'
import TokenContext from './contexts/TokenContext'
import { ThemeProvider } from './theme'

import { UserContext, UserProvider } from './contexts/UserContext'
const TokenProvider = ({ children }) => {
  const [tokens, setTokens] = useState(0)

  return (
    <TokenContext.Provider value={{ tokens, setTokens }}>
      {children}
    </TokenContext.Provider>
  )
}

const App = () => {
  const { user } = useContext(UserContext)
  return (
    <ThemeProvider>
    <NavigationContainer>
      <TokenProvider>
          {user ? <MainBottomTabsNavigator/> : <LoginScreen />}

      </TokenProvider>
    </NavigationContainer>
    </ThemeProvider>
  )
}

const wrapper = () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  )
}

export default wrapper
