import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';

import { agregarTurno } from '../store/actions/turnos.action';

import FormAgregarTurno from '../components/FormAgregarTurno';

const PantallaAgregarTurno = ({ route, navigation })=>{
    const dispatch = useDispatch();

    const [cliente, setCliente] = useState('');
    const [horaTurno, setHoraTurno] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [sinDatos, setSinDatos] = useState(false);
    const [turnoAgregadoTxt, setTurnoAgregadoTxt] = useState(false);

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
            dispatch(agregarTurno(Math.random().toString(), horaTurno, cliente, descripcion ));

            setCliente('');
            setHoraTurno('');
            setDescripcion('');
            setSinDatos(false);
            setTurnoAgregadoTxt(true);
        }
    }

    const handleIrAListaDeTurnos = ()=>{
        navigation.navigate('Home');
    }

    return(
        <View style={styles.container}>
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
            <TouchableOpacity style={styles.botonVerTurnos} onPress={handleIrAListaDeTurnos} >
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