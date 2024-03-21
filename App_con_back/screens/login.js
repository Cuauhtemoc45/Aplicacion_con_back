// LoginForm.js

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Simulación de autenticación en el frontend
    if (username === 'usuario' && password === 'contrasena') {
      // Credenciales válidas, puedes redirigir a la siguiente pantalla
      navigation.navigate('principal');
    } else {
      // Credenciales inválidas, puedes mostrar un mensaje de error o realizar otra acción
      alert('Credenciales inválidas. Inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logotipo}
        source={require('../assets/logotipo.png')}
      />
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('ENLACE_AQUI')}>
        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña? Entra aquí</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center',
    paddingTop: 200,
  },
  input: {
    height: 40,
    width: 320,
    borderBottomWidth: 1,  // Agregado para establecer el borde inferior
    borderBottomColor: 'gray',  // Agregado para establecer el color del borde inferior
    marginBottom: 12,
    paddingHorizontal: 8,

  },
  logotipo: {
    resizeMode: 'contain',
    width: 120,
    height: 100,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#F04949',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  forgotPassword: {
    color: 'black',  // Puedes cambiar el color según tu diseño
    textDecorationLine: 'underline',
    marginTop: 10,
    textAlign: 'center',
  }
  
});

export default LoginForm;
