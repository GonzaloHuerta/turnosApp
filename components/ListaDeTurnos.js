import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

const ListaDeTurnos = (props)=>{
    return(
          <View style={styles.listContainer}>
              <FlatList 
              data={props.listaTurnos}
              renderItem={data=>{
                  return(
                    <View style={styles.itemContainer}>
                        <Text style={styles.horaTurno}>{data.item.hora} hs.</Text>
                          <Text style={styles.nombreCliente}>{data.item.cliente}</Text>
                          <Text style={styles.descripcion}>{data.item.descripcion}</Text>
                          <TouchableOpacity style={styles.botonCancelarTurno} onPress={()=>props.handleModalCancelarTurno(data.item.id)}>
                              <Text style={styles.textoBoton}>Cancelar Turno</Text>
                          </TouchableOpacity>
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
        paddingBottom: 200,
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
      },
      textoBoton:{
        color: "#ffffff",
        fontWeight: 'bold',
      },
      clear:{
        height: 40,
      }
})
