import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import ListaDeTurnos from '../components/ListaDeTurnos';
import Header from '../components/Header';
import ModalCancelarTurno from '../components/ModalCancelarTurno';

const HomeScreen = ({ route, navigation })=>{
  const [itemSeleccionado, setItemSeleccionado] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [listaTurnos, setListaTurnos] = useState([]);

  const handleModalCancelarTurno = id =>{
    setItemSeleccionado(listaTurnos.find(item=>item.id===id));
    setModalVisible(true);
  }

  const handleCerrarModal = ()=>{
    setModalVisible(false);
  }
  
  const handleCancelarTurno = id =>{
    setListaTurnos(listaTurnos.filter(item=>item.id !== id));
    setModalVisible(false);
    setItemSeleccionado({});
  }
  const handleSwitchToAgregarTurnos = ()=>{
    props.setPantallaInicio(false);
  }

  console.log(route.params);

  if(route.params!==undefined){
    const { listaTurnosParam, setListaTurnosParam } = route.params;
  }
  
    return(
        <View style={styles.container}>
            {/* <Header title="Lista de turnos"/> */}
            <TouchableOpacity 
              style={styles.botonIrATurnos} 
              onPress={()=>{
                navigation.navigate('AgregarTurno',{
                  listaTurnos: listaTurnos,
                  setListaTurnos: setListaTurnos
                });
              }} >
              <Text style={styles.textoBotonIrATurnos}>Agregar Turnos</Text>
            </TouchableOpacity>
            {listaTurnos.length > 0 ? 
            <View>
              
              <Text style={styles.title}>Turnos de hoy:</Text>
              <ListaDeTurnos 
                listaTurnos={ listaTurnos }
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
    paddingVertical: 10,
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