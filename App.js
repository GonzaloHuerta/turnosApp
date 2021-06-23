import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import ModalCancelarTurno from './components/ModalCancelarTurno';
import FormAgregarTurno from './components/FormAgregarTurno';
import ListaDeTurnos from './components/ListaDeTurnos';
import Header from './components/Header';

export default function App() {
  const [cliente, setCliente] = useState('');
  const [horaTurno, setHoraTurno] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [listaTurnos, setListaTurnos] = useState([]);
  const [itemSeleccionado, setItemSeleccionado] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [sinDatos, setSinDatos] = useState(false);


  const handleSetCliente = (txtCliente)=>{
    setCliente(txtCliente);
  }

  const handleSetHoraTurno = (txtHoraTurno) =>{
    setHoraTurno(txtHoraTurno);
  }

  const handleSetDescripcion = (txtDescripcion) =>{
    setDescripcion(txtDescripcion);
  }
  
  const handleAgregarTurno = ()=>{
    if(cliente == '' || horaTurno == '' || descripcion == ''){
      setSinDatos(true);
    }
    else{
      setListaTurnos([
        ...listaTurnos,
        {
          id: Math.random().toString(),
          hora: horaTurno,
          cliente: cliente,
          descripcion: descripcion
        }
      ])
      setCliente('');
      setHoraTurno('');
      setDescripcion('');
      setSinDatos(false);
    }
  }

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

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' barStyle='dark-content' />
      <Header title="Agregar nuevo turno" />
      <FormAgregarTurno 
        handleSetHoraTurno={handleSetHoraTurno}
        handleSetCliente={handleSetCliente}
        handleSetDescripcion={handleSetDescripcion}
        handleAgregarTurno={handleAgregarTurno}
        horaTurno={horaTurno}
        cliente={cliente}
        descripcion={descripcion}
        sinDatos={sinDatos}
      />
      
      {listaTurnos.length > 0 ? 
      <View>
        <Text style={styles.title}>Lista de turnos para hoy:</Text>
        <ListaDeTurnos 
        listaTurnos={listaTurnos}
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
  );
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
    marginBottom: 15,
  },
  textoSinTurnos:{
    textAlign: 'center',
    paddingTop: 20,
  },
});
