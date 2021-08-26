import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import Colors from '../constants/Colors';
import bgImage from '../assets/img/task-pattern.png';
import { Ionicons } from '@expo/vector-icons';

const ListaDeTurnos = (props)=>{
  /* console.log(props.listaTurnos) */
  
  const listaDeTurnosOrdenada =  props.listaTurnos.slice().sort((a, b) => new Date(a.fechaYHora) - new Date(b.fechaYHora));
  /* console.log("ordenada?", listaDeTurnosOrdenada); */

  const handleDetallesDelTurno = (nombreCliente, fechaYHora, descripcion)=>{
    props.navigation.navigate('DetallesTurno', {cliente: nombreCliente, fechaYHora: fechaYHora, descripcion: descripcion});
  }
    return(
      <ImageBackground source={bgImage} style={{width: '100%', height: '100%'}}>
        <View style={styles.listContainer}>
          <FlatList 
            data={listaDeTurnosOrdenada}
            renderItem={data=>{
              return(
                <View style={styles.itemContainer}>
                  <Text style={styles.fechaYHoraTurno}>
                    <Text>
                    <Ionicons name="calendar" size={24} color={Colors.green} />
                      <Text> </Text>
                        {new Date(data.item.fechaYHora).getDay()===0 ? <Text>Domingo </Text> : null}
                        {new Date(data.item.fechaYHora).getDay()===1 ? <Text>Lunes </Text> : null}
                        {new Date(data.item.fechaYHora).getDay()===2 ? <Text>Martes </Text> : null}
                        {new Date(data.item.fechaYHora).getDay()===3 ? <Text>Miércoles </Text> : null}
                        {new Date(data.item.fechaYHora).getDay()===4 ? <Text>Jueves </Text> : null}
                        {new Date(data.item.fechaYHora).getDay()===5 ? <Text>Viernes </Text> : null}
                        {new Date(data.item.fechaYHora).getDay()===6 ? <Text>Sábado </Text> : null}
                       {new Date(data.item.fechaYHora).getDate()}/{new Date(data.item.fechaYHora).getMonth()+1}
                       <Text> </Text>
                       <Ionicons name="time" size={24} color={Colors.green} />
                       {new Date(data.item.fechaYHora).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}hs.
                       
                    </Text>
                  </Text>

                  <Text style={styles.nombreCliente}>{data.item.nombreCliente}</Text>
                  <Text style={styles.descripcion}>{data.item.descripcion}</Text>
                  <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.botonCancelarTurno} onPress={()=>props.handleModalCancelarTurno(data.item.id)}>
                      <Text style={styles.textoBoton}>Eliminar Turno</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botonDetallesTurno} onPress={()=>handleDetallesDelTurno(data.item.nombreCliente, data.item.fechaYHora, data.item.descripcion)}>
                      <Text style={styles.textoBoton}>Detalles del turno</Text>
                    </TouchableOpacity>
                  </View>    
                </View> 
              )
            }}
            keyExtractor={item=>item.id.toString()}
          />      
          <View style={styles.clear}></View>   
        </View>   
      </ImageBackground>     
    )
}

export default ListaDeTurnos;

const styles = StyleSheet.create({
    listContainer:{
        paddingBottom: 20,
        height: '100%',
      },
      itemContainer:{
        backgroundColor: Colors.background,
        padding: 20,
        marginBottom: 10,
      },
      nombreCliente:{
        fontSize: 20
      },
      fechaYHoraTurno:{
        fontSize: 24,
        color: Colors.green,
        fontWeight: 'bold',
      },
      descripcion:{
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
      },
      botonCancelarTurno:{
        alignItems: 'center',
        backgroundColor: Colors.red,
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
      },
})
