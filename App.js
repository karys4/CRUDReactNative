import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import VistaActualizar from './views/actualizaVista';
import VistaGeneral from './views/vistaGeneral';
import VistaCrear from './views/crearVista';
import VistaEliminar from './views/eliminarVista';

import React from 'react';

const array = [
  {
      name: "Kary",
      email: "kary@gmail.com",
      age: 35,
  },
  {
      name: "Juan",
      email: "Juan@gmail.com",
      age: 25,
  },
  {
      name: "María",
      email: "maria@gmail.com",
      age: 15,
  },
  ];

export const MyContext = React.createContext({usuarios: array});



const MyNavegacion = createNativeStackNavigator();



  

export default function App() {
  const [listaUsuario, setListaUsuarios] = React.useState(array);

  const postData = (usuario) => {
    setListaUsuarios([...listaUsuario, usuario]);
  }

  const putData = (usuario, indice) => {
    const listaCopia = listaUsuario;
    listaCopia.splice(indice, 1, usuario);
    setListaUsuarios([...listaCopia]);
  };

  const deleteData = (indice) => {
    const listaCopia = listaUsuario;
    listaCopia.splice(indice, 1);
    setListaUsuarios([...listaCopia]);
  };

  return (
    <MyContext.Provider value={{usuarios: listaUsuario, postData, putData, deleteData}}>
    <NavigationContainer>
      <MyNavegacion.Navigator> 
        <MyNavegacion.Screen name='Vista General' component={VistaGeneral}/>
        <MyNavegacion.Screen name='Vista Crear' component={VistaCrear}/>
        <MyNavegacion.Screen name='Vista Actualizar' component={VistaActualizar}/>
        <MyNavegacion.Screen name='Vista Eliminar' component={VistaEliminar}/>
      </MyNavegacion.Navigator>
    </NavigationContainer>
    </MyContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
