import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('testuser');
  const [password, setPassword] = useState('testpass');

  const login = () => {
    // fetch('https://perovaz.com/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username,
    //     password,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data.success) {
          navigation.navigate('Map');
      //   } else {
      //     alert('Invalid username or password');
      //   }
      // });
  };

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
      <Button title="Login" onPress={login} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
  },
});

export default LoginScreen;