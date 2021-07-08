import React, {useState} from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity} from 'react-native';

import Header from '../components/Header';
import FormAgregarTurno from '../components/FormAgregarTurno';

const PantallaAgregarTurno = ({ route, navigation })=>{
    const [cliente, setCliente] = useState('');
    const [horaTurno, setHoraTurno] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [sinDatos, setSinDatos] = useState(false);
    const [turnoAgregadoTxt, setTurnoAgregadoTxt] = useState(false);

    const { listaTurnos, setListaTurnos } = route.params;

    const handleSetCliente = (txtCliente)=>{
        setCliente(txtCliente);
        setTurnoAgregadoTxt(false);
    }
    
    const handleSetHoraTurno = (txtHoraTurno) =>{
        const valorNumerico = Number.parseInt(txtHoraTurno);
        if (valorNumerico > 23){
            setHoraTurno('00')
        }
        else{
            setHoraTurno(txtHoraTurno)
        }
        //setHoraTurno(txtHoraTurno);
        setTurnoAgregadoTxt(false);
    }

    const handleSetDescripcion = (txtDescripcion) =>{
        setDescripcion(txtDescripcion);
        setTurnoAgregadoTxt(false);
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
          setTurnoAgregadoTxt(true);
          console.log('Lista Turnos', listaTurnos);
        }
    }

    const handleIrAInicio = ()=>{
        props.setPantallaInicio(true);
    }

    return(
        <View style={styles.container}>
            {/* <Header title="Agregar nuevo turno" /> */}
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
            {turnoAgregadoTxt ? <Text style={styles.mensaje}>¡Turno agregado!</Text> : null}
            <TouchableOpacity 
                style={styles.botonVerTurnos} 
                onPress={()=>{
                    navigation.navigate('Home')
                }} 
            >
              <Text style={styles.textoBoton}>Ver lista de turnos</Text>
            </TouchableOpacity>
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
    mensaje:{
        textAlign: 'center',
        paddingBottom: 20,
        color: '#44AF69',
        fontWeight: 'bold',
        fontSize: 20
    },
    botonVerTurnos:{
        alignItems: 'center',
        backgroundColor: '#2B9EB3',
        padding: 10,
        borderRadius: 10,
      },
    textoBoton:{
        color: "#ffffff",
        fontWeight: 'bold',
    }
  });

export default PantallaAgregarTurno;