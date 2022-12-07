import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MapScreen from './screens/MapScreen';
import LoginScreen from './screens/LoginScreen';
import TokenContext from './contexts/TokenContext';

const TokenProvider = ({children}) => {
  const [tokens, setTokens] = useState(0);

  return (
    <TokenContext.Provider value={{tokens, setTokens}}>
      {children}
    </TokenContext.Provider>
  );
};

const AppNavigator = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TokenProvider>
        <AppNavigator.Navigator>
          <AppNavigator.Screen name="Login" component={LoginScreen} />
          <AppNavigator.Screen name="Map" component={props => <MapScreen {...props} />} />
        </AppNavigator.Navigator>
      </TokenProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: '#fff',
      },
      android: {
        backgroundColor: '#333',
      },
    }),
  },
});

export default App;
