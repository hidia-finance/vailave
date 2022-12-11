import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { WalletScreen } from '../screens/WalletScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MainStackNavigator from './MainStackNavigator'
import RegistrySentScreen from '../screens/RegistrySentScreen'

const BottomTabs = createBottomTabNavigator()

export const MainBottomTabsNavigator = () => (
  <BottomTabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: { position: 'absolute', paddingBottom: 8, paddingTop:  },
      labelStyle: {
        marginTop: 0,
        marginBottom: 8
      }
    }}
    defaultNavigationOptions={{
      tabBarLabel: {
        marginTop: 0
      }
    }}
    initialRouteName='main'
  >
    <BottomTabs.Screen
      name='main'
      options={{
        tabBarLabel: 'Main',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='map' color={color} size={size} />
        )
      }}
      component={MainStackNavigator}
    />
    <BottomTabs.Screen
      name='wallet'
      options={{
        tabBarLabel: 'Wallet',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='wallet' color={color} size={size} />
        )
      }}
      component={WalletScreen}
    />
     <BottomTabs.Screen
      name='process'
      options={{
        tabBarLabel: 'History',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='history' color={color} size={size} />
        ),
        tabBarBadge: 3
      }}
      component={RegistrySentScreen}
    />
  </BottomTabs.Navigator>
)

export default MainBottomTabsNavigator
