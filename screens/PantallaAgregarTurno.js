import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';

import { agregarTurno } from '../store/actions/turnos.action';

import FormAgregarTurno from '../components/FormAgregarTurno';
import LocationPicker from '../components/LocationPicker';

const PantallaAgregarTurno = ({ route, navigation })=>{
    const dispatch = useDispatch();

    const [nombreCliente, setNombreCliente] = useState('');
    const [horaTurno, setHoraTurno] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [ubicacionLat, setUbicacionLat] = useState('');
    const [ubicacionLong, setUbicacionLong] = useState('');
    const [sinDatos, setSinDatos] = useState(false);
    const [turnoAgregadoTxt, setTurnoAgregadoTxt] = useState(false);

    useEffect(()=>{
        setTurnoAgregadoTxt(false);
    },[])

    const handleSetCliente = (txtCliente)=>{
        setNombreCliente(txtCliente);
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

    const handleSetUbicacion = (lat, long)=>{
        setUbicacionLat(lat);
        setUbicacionLong(long);
    }
      
    const handleAgregarTurno = ()=>{
        if(nombreCliente == '' || horaTurno == '' || descripcion == ''){
          setSinDatos(true);
        }
        else{
            dispatch(agregarTurno( horaTurno, nombreCliente, descripcion, ubicacionLat, ubicacionLong ));

            setNombreCliente('');
            setHoraTurno('');
            setDescripcion('');
            setSinDatos(false);
            setTurnoAgregadoTxt(true);
        }
    }

    return(
        <View style={styles.container}>
            <FormAgregarTurno 
                handleSetHoraTurno={handleSetHoraTurno}
                handleSetCliente={handleSetCliente}
                handleSetDescripcion={handleSetDescripcion}
                handleSetUbicacion={handleSetUbicacion}
                handleAgregarTurno={handleAgregarTurno}
                horaTurno={horaTurno}
                nombreCliente={nombreCliente}
                descripcion={descripcion}
                sinDatos={sinDatos}
            />
            {turnoAgregadoTxt ? <Text style={styles.mensaje}>¡Turno agregado!</Text> : null}
            
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