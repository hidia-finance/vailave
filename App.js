import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { MainBottomTabsNavigator } from './navigator/MainBottomTabsNavigator'
import LoginScreen from './screens/LoginScreen'
import TokenContext from './contexts/TokenContext'
import { Provider as PaperProvider } from 'react-native-paper'

import { UserContext, UserProvider } from './contexts/UserContext'
const TokenProvider = ({ children }) => {
  const [tokens, setTokens] = useState(0)

  return (
    <TokenContext.Provider value={{ tokens, setTokens }}>
      {children}
    </TokenContext.Provider>
  )
}

const AppNavigator = createNativeStackNavigator()

const App = () => {
  const { user } = useContext(UserContext)
  return (
    <PaperProvider>
    <NavigationContainer>
      <TokenProvider>
          {user ? <MainBottomTabsNavigator/> : <LoginScreen />}

      </TokenProvider>
    </NavigationContainer>
    </PaperProvider>
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
