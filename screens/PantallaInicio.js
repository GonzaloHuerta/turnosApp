import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import ListaDeTurnos from '../components/ListaDeTurnos';
import Header from '../components/Header';
import ModalCancelarTurno from '../components/ModalCancelarTurno';

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
        <View style={styles.container}>
            <Header title="Lista de turnos"/>
            <TouchableOpacity style={styles.botonIrATurnos} onPress={handleSwitchToAgregarTurnos} >
              <Text style={styles.textoBotonIrATurnos}>Agregar Turnos</Text>
            </TouchableOpacity>
            {props.listaTurnos.length > 0 ? 
            <View>
              
              <Text style={styles.title}>Turnos de hoy:</Text>
              <ListaDeTurnos 
                listaTurnos={props.listaTurnos}
                handleModalCancelarTurno={handleModalCancelarTurno}
              />
            </View>
                
            : <Text style={styles.textoSinTurnos}>Sin turnos para hoy</Text>}
            
            
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
  container:{
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
    paddingVertical: 20,
  },
  botonIrATurnos:{
    alignItems: 'center',
    backgroundColor: '#2B9EB3',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  textoBotonIrATurnos:{
      color: "#ffffff",
      fontWeight: 'bold',
  }
  });

export default HomeScreen;