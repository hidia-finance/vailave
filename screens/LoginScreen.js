import React, { useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { UserContext } from '../contexts/UserContext'

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('testuser')
  const [password, setPassword] = useState('testpass')

  const { actions } = useContext(UserContext)

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button icon="walk" onPress={() => actions.login('me')} mode="contained" size="large">Acessar</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10
  }
})

export default LoginScreen
