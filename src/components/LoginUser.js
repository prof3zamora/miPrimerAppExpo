import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';
import { useNavigation } from '@react-navigation/native';

//<NavigationContainer>
//<Tab.Navigator

export default function LoginUser(props) {
    //navigation of props
    const { navigation } = props;
    //Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    //const navigation = useNavigation(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Usuario logueado");
            //navigatio
            navigation.navigate('MainTabs');
            Alert.alert("Éxito", "Usuario logueado");
        })
        .catch((error) => {
            console.log("Usuario no logueado", error.message);
            Alert.alert("Error", error.message);
        });
    };

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Usuario registrado");
            Alert.alert("Éxito", "Usuario registrado");
        })
        .catch((error) => {
            console.log("Error al registrar usuario", error.message);
            Alert.alert("Error", error.message);
        });
    };

    const { nombre } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bienvenido {nombre}</Text>
            <TextInput 
                placeholder="Correo electrónico" 
                style={styles.input}
                value={email}
                onChangeText={text => setEmail(text)}
                keyboardType="email-address"
            />
            <TextInput 
                placeholder="Contraseña" 
                style={styles.input}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Button title="Iniciar sesión" onPress={signIn} style={styles.button} />
            <Button title="Registrarse" onPress={createUser} style={styles.button} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        padding: 10,
        margin: 5,
        borderColor: '#ccc',
        borderBottomWidth: 1,
    },
    button: {
        flex: 1,
        marginBottom: 20,
    },
});
