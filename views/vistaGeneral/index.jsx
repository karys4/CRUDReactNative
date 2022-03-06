
import {View, Text, Button, StyleSheet} from 'react-native';

import axios from 'axios';


import { obtenerUsuarios } from '../../api';

import React from "react";
import { TouchableOpacity } from 'react-native';

const VistaGeneral = ({navigation}) => {
    const [informacion, setInformacion] = React.useState([]);
    React.useEffect(() => {

        const traerInformacion = async () => {
            /*const response = await axios.get('https://9bea-45-6-63-88.ngrok.io/api/users');
            console.log(response);*/
    
            const response = obtenerUsuarios();
            setInformacion(response);
            console.log(response);
        };
        console.log("Se está ejecutando desde use effect");
        traerInformacion();
    }, []);
    

    return (
     <View>
        {informacion.map((usuario) => {
                return (
                    <View style={styles.usuario}>
                        <Text>{usuario.name}</Text>
                        <Text>{usuario.email}</Text>
                        <Text>{usuario.age}</Text>
                        <TouchableOpacity>
                            <Text style={styles.eliminar}>Eliminar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Text style={styles.actualizar}>Actualizar</Text>
                        </TouchableOpacity>     
                    </View>
                );
            })}
        
        <Button title="Crear" onPress={() => navigation.navigate('Vista Crear')}/>

    </View>
    );
};
const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 40,
    },
    usuario: {
        display: "flex",
        borderWidth: 1,
        borderColor: "#000",
        padding:10,
        backgroundColor: "#fff",
    },
    eliminar: {
        color: "#FF0000",
    },
    actualizar: {
        backgroundColor: "#0000FF",
        color: "#fff",
     },
  });

export default VistaGeneral;