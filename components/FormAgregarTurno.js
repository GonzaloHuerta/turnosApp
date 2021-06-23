import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const FormAgregarTurno = (props)=>{
    return(
        <View style={styles.formAgregarTurno}>
            <View style={styles.formGroup}>
            <TextInput 
                placeholder='Hora'
                style={styles.input}
                onChangeText={props.handleSetHoraTurno}
                value={props.horaTurno}
            />
            <TextInput 
                placeholder='Nombre del cliente'
                style={styles.input}
                onChangeText={props.handleSetCliente}
                value={props.cliente}
            />
            </View>
            <TextInput 
                placeholder='Descripción del Trabajo'
                style={[styles.inputDescripcion, styles.input]}
                onChangeText={props.handleSetDescripcion}
                value={props.descripcion}
            />
            <TouchableOpacity style={styles.botonAgregarTurno} onPress={props.handleAgregarTurno} >
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
        marginTop: 6
      },
      botonAgregarTurno:{
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10,
      },
      botonAgregarTurnoDisabled:{
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        padding: 10,
      },  
      textoBoton:{
        color: "#ffffff",
        fontWeight: 'bold',
      },
      textoError:{
        color:'red',
        textAlign: 'center',
        paddingTop: 15,
      }
})