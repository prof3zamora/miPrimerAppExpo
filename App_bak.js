//yarn
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/LoginForm';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/splash.png')} style={styles.container} />
      <Text style={styles.text}>Hola Mundo</Text>
      <Text style={styles.text}>Esto es una prueba de React Native</Text>

      <LoginForm name="Nestor Testor"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  text:{
    fontSize: 20,
    padding: 20,
  }
});
