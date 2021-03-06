import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import { MyContext } from '../../App';
import axios from "axios";
import React from 'react';
//import { use } from 'express/lib/application';

const initialState = {
    name: "",
    email: "",
    age: "",
};

const VistaActualizar = ({route,navigation}) => {

    const [user, setUser] = React.useState(initialState);
    const {itemId} = route.params;


    const {usuarios, putData} = React.useContext(MyContext);

    const ChangeUserInputs = (propiedad, value) => {
        setUser({
            ...user,
            [propiedad]: value,
        });
    };

    React.useEffect(()=> {
        setUser(usuarios[itemId]);
    }, []);

    const PUTDATA = () => {
        putData(user, itemId);
    };



    return (
        <View>
        <Text>Nombre:</Text>
       <TextInput style={styles.textInput} value= {user.name} onChangeText={(text) => ChangeUserInputs("name", text)} />
       <Text>Email:</Text>
       <TextInput style={styles.textInput} value= {user.email} onChangeText={(text) => ChangeUserInputs("email", text)} />
       <Text>Edad:</Text>
       <TextInput style={styles.textInput} value= {user.age} onChangeText={(text) => ChangeUserInputs("age", text)} />
       <Button title="Confirmar" onPress={PUTDATA}/>
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
});

export default VistaActualizar;