//npx expo start
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import {Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import LoginUser from './src/components/LoginUser';
import WelcomeScreen from './src/components/WelcomeScreen';
import SettingsScreen from './src/components/SettingsScreen';

//Dependencias
//npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
// import { Link } from 'expo-router';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const PlaceholderImage = '../../assets/logo.png';
const BackgroundImage = '../../assets/bg.png';
// npx expo install react-native-web react-dom @expo/metro-runtime

//Config Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator initialRouteName="Welcome">
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
    
  return (
 
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      {/* Pantalla de Login sin tabs */}
      <Stack.Screen 
        name="Login" 
        component={LoginUser} 
        options={{ headerShown: false }} // Oculta el header si no lo quieres en Login
      />
      
      {/* Navegación de tabs */}
      <Stack.Screen 
        name="MainTabs" 
        component={MainTabs} 
        options={{ headerShown: false }} // Oculta el header en las tabs
      />
    </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  text:{
    fontSize: 20,
    padding: 20,
  }
});
