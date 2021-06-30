import React, {useState} from 'react';
import { View, StyleSheet, Button } from 'react-native';

import Header from '../components/Header';
import FormAgregarTurno from '../components/FormAgregarTurno';

const PantallaAgregarTurno = (props)=>{
    const [cliente, setCliente] = useState('');
    const [horaTurno, setHoraTurno] = useState('');
    const [descripcion, setDescripcion] = useState('');
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
          props.setListaTurnos([
            ...props.listaTurnos,
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

    const handleIrAInicio = ()=>{
        props.setPantallaInicio(true);
    }

    return(
        <View>
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
            <Button title="GO HOME!" onPress={handleIrAInicio} />
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

export default PantallaAgregarTurno;