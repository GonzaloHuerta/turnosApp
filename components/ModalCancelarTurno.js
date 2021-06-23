import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';

const ModalCancelarTurno = (props)=>{
    return(
        <Modal animationType='fade' visible={props.modalVisible} transparent={true} style={styles.modalParent}> 
          <View style={styles.modal}>
            <View style={styles.modalContainer}>
              <Text style={styles.tituloModal}>¿Desea cancelar el turno de {props.itemSeleccionado.cliente}?</Text>
              <View style={styles.containerBotonesModal}>
                <TouchableOpacity style={styles.botonSi} onPress={()=>props.handleCancelarTurno(props.itemSeleccionado.id)}>
                  <Text style={styles.textoBoton}>Si</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonNo} onPress={props.handleCerrarModal}>
                  <Text style={styles.textoBoton}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View> 
      </Modal>
    )
}

export default ModalCancelarTurno;


const styles = StyleSheet.create({
    modal:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      height:'100%',
      width: '100%',
      zIndex: 1000,
    },
    modalContainer:{
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowColor: "#000",
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    }, 
    tituloModal:{
        textAlign: 'center',
      },
      containerBotonesModal:{
        marginTop: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
      botonSi:{
        backgroundColor: '#44AF69',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 6,
        paddingBottom: 6,
        color: '#ffffff',
        marginRight: 10,
      },  
      botonNo:{
        backgroundColor: '#F8333C',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 6,
        paddingBottom: 6,
        color: '#ffffff',
      },
      textoBoton:{
        color: "#ffffff",
        fontWeight: 'bold',
      },
});
