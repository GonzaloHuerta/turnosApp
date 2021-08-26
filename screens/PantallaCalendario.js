import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import {LocaleConfig} from 'react-native-calendars';
import {useSelector} from 'react-redux';

LocaleConfig.locales['ar'] = {
  monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
  monthNamesShort: ['Ene.','Feb.','Mar','Abr','May','Jun','Jul.','Ago','Sep.','Oct.','Nov.','Dic.'],
  dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
  dayNamesShort: ['Dom.','Lun.','Mar.','Mie.','Jue.','Vie.','Sab.'],
  today: 'Hoy'
};
LocaleConfig.defaultLocale = 'ar';

const PantallaCalendario = () => {
  /* const[listaDeTurnos, setListaDeTurnos] = useState(); */
 
 /*  useFocusEffect(
    React.useCallback(() => {
      const listaDeTurnos = useSelector((state) => state.turnos.listaDeTurnos);
    }, [listaDeTurnos])
  ); */

  const listaDeTurnos = useSelector((state) => state.turnos.listaDeTurnos);

  const listaDeTurnosOrdenada =  listaDeTurnos.slice().sort((a, b) => new Date(a.fechaYHora) - new Date(b.fechaYHora));
  /* console.log(listaDeTurnos);  */

  const itemsTurnos = {}
  listaDeTurnosOrdenada.forEach((turno) => {
      const soloFecha = turno.fechaYHora.split("T");
      const hora = new Date(turno.fechaYHora).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      if (soloFecha[0] in itemsTurnos) {
        itemsTurnos[soloFecha[0]] = itemsTurnos[soloFecha[0]]
        .concat({ cliente: turno.nombreCliente, descripcion: turno.descripcion, hora: hora });
      } else {
        itemsTurnos[soloFecha[0]] = [{cliente: turno.nombreCliente, descripcion: turno.descripcion, hora: hora}]
      }
    })

  console.log('items', itemsTurnos);

  /* const fechasFormat = [];
    const fechas = listaDeTurnos.map((item)=>{
      const soloFecha = item.fechaYHora.split("T");
      return fechasFormat.push(soloFecha[0]);
    }) */

  return (
    
      <Agenda
      items={itemsTurnos}
      renderItem={(item, firstItemInDay) => {return (
          <View style={styles.container}>
            <Text style={styles.hora}>{item.hora}</Text>
            <Text>{item.cliente}</Text>
            <Text>{item.descripcion}</Text>
          </View>
            
            );
        }}
        renderEmptyDate={() => {return (
            <View style={styles.noData}>
                <Text>Sin turnos para este día</Text>
            </View>
            );
        }}
        renderEmptyData = {() => {return (
          <View style={styles.noData}>
              <Text>Sin turnos para este día</Text>
          </View>
          );
      }}
        pastScrollRange={1}
        futureScrollRange={2}
    />
  
    
  );

};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 20,
    },
    agenda:{
      paddingBottom: 70,
    },
    noData:{
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      paddingTop: 30,
      alignItems: 'center',
    },
    hora:{
      fontWeight: 'bold',
    }
})

export default PantallaCalendario;
