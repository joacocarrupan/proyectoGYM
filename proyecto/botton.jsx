import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, TextInput, Alert } from 'react-native';

const Boton = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handlePress = () => {
    Alert.alert(`Botón presionado. Usuario: ${usuario}, Contraseña: ${contrasena}`);
  };

  const handleNoTieneAccount = () => {
    navigation.navigate('Registro');
  };

  const handleAdditionalButton = () => {
   
    Alert.alert('Botón adicional presionado');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Iniciar Sesión</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese el Correo"
          value={usuario}
          onChangeText={setUsuario}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese la Contraseña"
          value={contrasena}
          onChangeText={setContrasena}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNoTieneAccount}>
          <Text style={styles.buttonText}>No tiene cuenta</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC107',
  },
  formContainer: {
    width: '120%',
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
    marginBottom: 12,
    alignItems: 'center',
  },
  additionalButton: {
    width: '100%',
    backgroundColor: 'blue',
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

export default Boton;