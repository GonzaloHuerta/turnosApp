import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import ListaDeTurnos from './ListaDeTurnos';
import Header from '../components/Header';
import ModalCancelarTurno from './ModalCancelarTurno';

const HomeScreen = (props)=>{
  const [itemSeleccionado, setItemSeleccionado] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalCancelarTurno = id =>{
    setItemSeleccionado(props.listaTurnos.find(item=>item.id===id));
    setModalVisible(true);
  }

  const handleCerrarModal = ()=>{
    setModalVisible(false);
  }
  
  const handleCancelarTurno = id =>{
    props.setListaTurnos(props.listaTurnos.filter(item=>item.id !== id));
    setModalVisible(false);
    setItemSeleccionado({});
  }
  const handleSwitchToAgregarTurnos = ()=>{
    props.setPantallaInicio(false);
  }

    return(
        <View>
            <Header title="Lista de turnos"/>
            {props.listaTurnos.length > 0 ? 
            <View>
                <Text style={styles.title}>Turnos de hoy:</Text>
                <ListaDeTurnos 
                  listaTurnos={props.listaTurnos}
                  handleModalCancelarTurno={handleModalCancelarTurno}
                />
                
            </View>
                
            : <Text style={styles.textoSinTurnos}>Sin turnos para hoy</Text>}
            <Button title="Ir a Agregar turnos" onPress={handleSwitchToAgregarTurnos} />

            <ModalCancelarTurno
              modalVisible={modalVisible}
              itemSeleccionado={itemSeleccionado}
              handleCerrarModal={handleCerrarModal}
              handleCancelarTurno={handleCancelarTurno}
           />
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