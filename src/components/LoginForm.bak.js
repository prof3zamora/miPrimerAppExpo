
import {Text, TextInput, Button, View, StyleSheet} from 'react-native';

export default function LoginForm(props){
    const {name} = props;
    return( 
        <View style={styles.view}>
            <Text>Hola {name}</Text>
            <TextInput placeholder="Usuario" style={styles.input} />
            <TextInput placeholder="Contraseña" style={styles.input}  />
            <Button title="Iniciar Sesión" />
        </View>
    );
}

const styles = StyleSheet.create({
    view:{
        padding: 10,
        fontSize: 17,
    },
    input:{
        padding:10,
        margin: 10,
        borderColor: '#CCC',
        borderBottomWidth: 1,
    },
});