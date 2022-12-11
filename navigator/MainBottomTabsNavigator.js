import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MapScreen } from '../screens/MapScreen'
import { WalletScreen } from '../screens/WalletScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MainStackNavigator from './MainStackNavigator'

const BottomTabs = createBottomTabNavigator()

export const MainBottomTabsNavigator = () => (
  <BottomTabs.Navigator
    screenOptions={{
      tabBarStyle: { position: 'absolute' }
    }}
  >
      <BottomTabs.Screen
      name="map"
      options={{
        tabBarLabel: 'Main',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
        )
      }}
      component={MainStackNavigator} />
          <BottomTabs.Screen
      name="wallet"
      options={{
        tabBarLabel: 'Wallet',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wallet" color={color} size={size} />
        ),
        tabBarBadge: 3
      }}
      component={WalletScreen} />
  </BottomTabs.Navigator>
)

export default MainBottomTabsNavigator
