import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ListaDeTurnos from './ListaDeTurnos';
import { Header } from 'react-native/Libraries/NewAppScreen';

const HomeScreen = (props)=>{
    return(
        <View>
            <Header title="Lista de turnos"/>
            {props.listaTurnos.length > 0 ? 
            <View>
                <Text style={styles.title}>Turnos de hoy:</Text>
                <ListaDeTurnos 
                  listaTurnos={props.listaTurnos}
                  handleModalCancelarTurno={props.handleModalCancelarTurno}
                  homeScreen={homeScreen}
                />
            </View>
                
            : <Text style={styles.textoSinTurnos}>Sin turnos para hoy</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 40,
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
    },
    title:{
      fontSize: 24,
      textAlign: 'center',
    },
    textoSinTurnos:{
      textAlign: 'center',
      paddingTop: 20,
    },
  });

export default HomeScreen;