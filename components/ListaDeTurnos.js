import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const ListaDeTurnos = (props, navigation)=>{
  /* console.log(props.listaTurnos) */
  const handleDetallesDelTurno = (nombreCliente, horaTurno, descripcion, ubicacionLat, ubicacionLong)=>{
    props.navigation.navigate('DetallesTurno', {cliente: nombreCliente, hora: horaTurno, descripcion: descripcion, ubicacionLat: ubicacionLat, ubicacionLong: ubicacionLong});
  }
    return(
          <View style={styles.listContainer}>
              <FlatList 
              data={props.listaTurnos}
              renderItem={data=>{
                  return(
                    <View style={styles.itemContainer}>
                        <Text style={styles.horaTurno}>{data.item.horaTurno} hs.</Text>
                          <Text style={styles.nombreCliente}>{data.item.nombreCliente}</Text>
                          <Text style={styles.descripcion}>{data.item.descripcion}</Text>
                          <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.botonCancelarTurno} onPress={()=>props.handleModalCancelarTurno(data.item.id)}>
                              <Text style={styles.textoBoton}>Cancelar Turno</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.botonDetallesTurno} onPress={()=>handleDetallesDelTurno(data.item.nombreCliente, data.item.horaTurno, data.item.descripcion, data.item.ubicacionLat, data.item.ubicacionLong)}>
                              <Text style={styles.textoBoton}>Detalles del turno</Text>
                            </TouchableOpacity>
                          </View>
                          
                    </View> 
                  )
              }}
              keyExtractor={item=>item.id}
              />      
              <View style={styles.clear}></View>   
          </View>   
    )
}

export default ListaDeTurnos;

const styles = StyleSheet.create({
    listContainer:{
        marginTop: 15,
        paddingBottom: 100,
        height: '100%',
      },
      itemContainer:{
        backgroundColor: '#fafafa',
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
      },
      nombreCliente:{
        fontSize: 20
      },
      horaTurno:{
        fontSize: 24,
        color: 'green'
      },
      descripcion:{
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
      },
      botonCancelarTurno:{
        alignItems: 'center',
        backgroundColor: '#F8333C',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 15,
      },
      botonDetallesTurno:{
        alignItems: 'center',
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 15,
      },
      textoBoton:{
        color: "#ffffff",
        fontWeight: 'bold',
      },
      clear:{
        height: 40,
      },
      buttonsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }
})
