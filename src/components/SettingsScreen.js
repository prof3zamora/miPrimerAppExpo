import React from 'react';
import { View, Text, StyleSheet, Button, Alert  } from 'react-native';
//import Platform
import { Platform } from 'react-native';

export default function SettingsScreen({ navigation }) {
    const handleLogout = () => {
      if (Platform.OS === 'web') 
      {
        // Si está en un navegador, simplemente cierra sesión sin mostrar el Alert
        navigation.replace('Login');
      } 
      else 
      {
        // En dispositivos móviles, muestra el Alert para confirmar
        Alert.alert(
          "Cerrar sesión",
          "¿Estás seguro de que deseas cerrar sesión?",
          [
            {
              text: "Cancelar",
              style: "cancel"
            },
            { 
              text: "Cerrar sesión", 
              onPress: () => navigation.replace('Login') 
            }
          ]
        );
      }
    };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Configuración</Text>
      <Button 
        title="Cerrar sesión" 
        color="red" 
        onPress={handleLogout} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
