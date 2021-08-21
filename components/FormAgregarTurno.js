import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import Colors from '../constants/Colors';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { agregarTurno } from '../store/actions/turnos.action';

const FormAgregarTurno = (props)=>{
  const dispatch = useDispatch();

  const [nombreCliente, setNombreCliente] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [sinDatos, setSinDatos] = useState(false);
  const [turnoAgregadoTxt, setTurnoAgregadoTxt] = useState(false);

  const [fechaYHora, setFechaYHora] = useState();
  const [fecha, setFecha] = useState();
  const [hora, setHora] = useState();
  const [isDateTimePickerVisible, setDateTimePickerVisibility] = useState(false);

  useEffect(()=>{
    setTurnoAgregadoTxt(false);
  },[])

  const handleSetCliente = (txtCliente)=>{
    setNombreCliente(txtCliente);
    setTurnoAgregadoTxt(false);
  }

/* const handleSetHoraTurno = (txtHoraTurno) =>{
    const valorNumerico = Number.parseInt(txtHoraTurno);
    if (valorNumerico > 23){
        setHoraTurno('00')
    }
    else{
        setHoraTurno(txtHoraTurno)
    }
    setTurnoAgregadoTxt(false);
} */

const handleSetDescripcion = (txtDescripcion) =>{
    setDescripcion(txtDescripcion);
    setTurnoAgregadoTxt(false);
}
  
const handleAgregarTurno = ()=>{

  if(nombreCliente == '' || fechaYHora == '' || descripcion == ''){
    setSinDatos(true);
  }
  else{
      dispatch(agregarTurno( fechaYHora, nombreCliente, descripcion ));
      
      setNombreCliente('');
      /* setFechaYHora(''); */
      setDescripcion('');
      setSinDatos(false);
      setTurnoAgregadoTxt(true);
  }
}

  const showDatePicker = () => {
    setDateTimePickerVisibility(true);
  };

  const hideDateTimePicker = () => {
    setDateTimePickerVisibility(false);
  };

  const handleConfirmDateTime = (date) => {
    setFechaYHora(date);
    setFecha(date.toLocaleDateString());
    setHora(date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
    hideDateTimePicker();
  };

  return(
    <View style={styles.formAgregarTurno}>
      
      <View style={styles.formGroup}>
        <View style={styles.center}>
          <Button title="Fecha y hora del turno" onPress={showDatePicker} />
          {fecha ? <Text>{fechaYHora.getDate()}/{fechaYHora.getMonth()+1}</Text> : null} 
          {hora ? <Text>{hora}</Text>:null}
        </View>   
        <DateTimePickerModal
          isVisible={isDateTimePickerVisible}
          mode="datetime"
          onConfirm={handleConfirmDateTime}
          onCancel={hideDateTimePicker}
          locale="es_AR"
        />
        <TextInput 
            placeholder='Nombre del cliente'
            style={styles.input}
            onChangeText={handleSetCliente}
            value={nombreCliente}
        />
      </View>
      <TextInput 
          placeholder='Descripción del Trabajo'
          style={[styles.inputDescripcion, styles.input]}
          onChangeText={handleSetDescripcion}
          value={descripcion}
      />

      {fechaYHora ? <Text>{fechaYHora.toLocaleString()}</Text> : null}

      {turnoAgregadoTxt ? <Text style={styles.mensaje}>¡Turno agregado!</Text> : null}

      <TouchableOpacity style={styles.botonAgregarTurno} onPress={handleAgregarTurno} >
        <Text style={styles.textoBoton}>Agregar Turno</Text>
      </TouchableOpacity>
      {props.sinDatos ? <Text style={styles.textoError}>Por favor, complete los datos del turno</Text> : null}
    </View>
  )
}

export default FormAgregarTurno;

const styles = StyleSheet.create({
    formAgregarTurno:{
        marginBottom: 15,
      },
      input:{
        borderBottomWidth: 1,
        borderColor: '#999999',
        borderStyle: 'solid',
      },
      formGroup:{
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      inputDescripcion:{
        marginBottom: 20,
        marginTop: 15
      },
      botonAgregarTurno:{
        alignItems: 'center',
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 10,
      }, 
      textoBoton:{
        color: "#ffffff",
        fontWeight: 'bold',
      },
      textoError:{
        color:'red',
        textAlign: 'center',
        paddingTop: 15,
      },
      mensaje:{
        textAlign: 'center',
        paddingBottom: 20,
        color: '#44AF69',
        fontWeight: 'bold',
        fontSize: 20
    },
    center:{
      textAlign: 'center',
    }
})