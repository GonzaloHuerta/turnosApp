import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

import ModalCancelarTurno from './screens/ModalCancelarTurno';
import FormAgregarTurno from './components/FormAgregarTurno';
import ListaDeTurnos from './screens/ListaDeTurnos';
import Header from './components/Header';
import PantallaInicio from './screens/PantallaInicio';
import PantallaAgregarTurno from './screens/PantallaAgregarTurno';

export default function App() {
  
  const [listaTurnos, setListaTurnos] = useState([]);
  const [itemSeleccionado, setItemSeleccionado] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  
  const [dataLoaded] = useFonts({
    'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  })
  const [pantallaInicio, setPantallaInicio] = useState(true);

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

  if(!dataLoaded){
    return <AppLoading />
  }

  const contenido = pantallaInicio
  ? <PantallaInicio
      handleModalCancelarTurno={handleModalCancelarTurno}
      listaTurnos={listaTurnos}
    />
  : <PantallaAgregarTurno 
      pantallaInicio={pantallaInicio}
      setPantallaInicio={setPantallaInicio}
    />

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />

      {contenido}

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
  },
  textoSinTurnos:{
    textAlign: 'center',
    paddingTop: 20,
  },
});
