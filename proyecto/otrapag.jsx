import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, TextInput, Alert } from 'react-native';

const Registro = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleRegister = () => {
    // añadir la lógica para registrar el usuario
    Alert.alert('Registro exitoso', `Usuario: ${nombre} ${apellido}, Correo: ${correo}`);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Registro</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese apellido"
          value={apellido}
          onChangeText={setApellido}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese correo"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese contraseña"
          value={contrasena}
          onChangeText={setContrasena}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: '200',
    justifyContent: '123',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC107',
  },
  formContainer: {
    width: '130%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    width: '100%',
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  button: {
    width: '100%',
    backgroundColor: 'black',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Registro;