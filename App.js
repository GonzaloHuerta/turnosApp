import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

import PantallaInicio from './screens/PantallaInicio';
import PantallaAgregarTurno from './screens/PantallaAgregarTurno';

export default function App() {
  
  const [listaTurnos, setListaTurnos] = useState([]);
  
  const [dataLoaded] = useFonts({
    'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  })
  const [pantallaInicio, setPantallaInicio] = useState(true);

  if(!dataLoaded){
    return <AppLoading />
  }

  const contenido = pantallaInicio
  ? <PantallaInicio
      setPantallaInicio={setPantallaInicio}
      listaTurnos={listaTurnos}
      setListaTurnos={setListaTurnos}
    />
  : <PantallaAgregarTurno 
      pantallaInicio={pantallaInicio}
      listaTurnos={listaTurnos}
      setListaTurnos={setListaTurnos}
      setPantallaInicio={setPantallaInicio}
    />

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      {contenido}
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
