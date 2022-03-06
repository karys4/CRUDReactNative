import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const VistaCrear = () => {
    const [user, setUser] = React.useState({
        name: "",
        email: "",
        age: "",
    });

    const ChangeUserInputs = (propiedad, value) => {
        setUser({
            ...user,
            [propiedad]: value,
        });
    };
    return (
     <View>
         <Text>Nombre:</Text>
        <TextInput style={styles.textInput} value= {user.name} onChangeText={text => ChangeUserInputs("name", text)} />
        <Text>Email:</Text>
        <TextInput style={styles.textInput} value= {user.email} onChangeText={text => ChangeUserInputs("email", text)} />
        <Text>Edad:</Text>
        <TextInput style={styles.textInput} value= {user.age} onChangeText={text => ChangeUserInputs("age", text)} />
    </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#fff',
        padding: 10,
        borderWidth: 1,
        borderColor: '#f4f4f4',
    }
})

export default VistaCrear;