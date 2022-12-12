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
      tabBarActiveTintColor: '#447B3B',
      headerShown: false,
      tabBarStyle: { position: 'absolute', paddingBottom: 10, paddingTop: 10, height: 70 }
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
        tabBarLabel: 'Mapa',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='map' color={color} size={size} />
        )
      }}
      component={MainStackNavigator}
    />
    <BottomTabs.Screen
      name='wallet'
      options={{
        tabBarLabel: 'Carteira',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='wallet' color={color} size={size} />
        ),
                tabBarBadge: 3,
        tabBarBadgeStyle: { backgroundColor: '#447B3B' }
      }}
      component={WalletScreen}
    />
     <BottomTabs.Screen
      name='process'
      options={{
        tabBarLabel: 'Histórico',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='history' color={color} size={size} />
        ),

      }}
      component={RegistrySentScreen}
    />
     <BottomTabs.Screen
      name='profile'
      options={{
        tabBarLabel: 'Perfil',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='face-man-profile' color={color} size={size} />
        ),
      }}
      component={RegistrySentScreen}
    />
  </BottomTabs.Navigator>
)

export default MainBottomTabsNavigator
