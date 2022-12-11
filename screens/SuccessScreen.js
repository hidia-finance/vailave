import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, IconButton, useTheme } from 'react-native-paper'

const SuccessScreen = ({ navigation }) => {
  const { colors } = useTheme()

  return (
    <View style={styles.container}>
      <IconButton
        icon="check-circle"
        size={128}
        style={styles.icon}
      />
      <Text style={styles.text}>Registro enviado!</Text>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate('history')}
      >
        View history
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8F5E9'
  },
  icon: {
    marginBottom: 16,
    backgroundColor: '#4CAF50',
    color: '#fff'
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50'
  },
  button: {
    marginTop: 16
  }
})

export default SuccessScreen
