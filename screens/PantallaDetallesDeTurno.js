import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Platform } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import * as Calendar from 'expo-calendar';

const PantallaDetallesDeTurno = ({ route }) => {
  const { cliente, fechaYHora, descripcion } = route.params;
  const [calendario, setCalendario] = useState();
  const [detallesEvento, setdetallesEvento] = useState({
    title: `Turno de ${cliente} - ${descripcion}`,
    startDate: new Date(fechaYHora),
    endDate: new Date(fechaYHora),
  });
  const [existeCalendario, setExisteCalendario] = useState();
  const [listaCalendariosDispositivo, setListaCalendariosDispositivo] = useState();
  const [agregadoAlCalendario, setAgregadoAlCalendario] = useState();

  useEffect(() => {
    const solicitarPermisos = async()=>{
      let {status} = await Calendar.requestCalendarPermissionsAsync();
      if(status !=='granted'){
        Alert.alert(
          'Permisos insuficientes',
          'Necesita dar permisos de acceso al calendario',
          [{text: 'Ok'}]
        );
      }
    }
      solicitarPermisos();
      verificaExisteCalendario();
      initCalendar();
  }, []);

  const obtenerCalendarios = async()=>{
    const calendarios = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
    return calendarios;
  }
  
  const verificaExisteCalendario = async()=>{
      let calendarios = await obtenerCalendarios();
      const listaCalendarios = calendarios.map((item)=>{
      return item.title;
    })
    /* console.log(listaCalendarios); */
    if (listaCalendarios.includes("Calendario de turnos")){
      setExisteCalendario(true);
    }
    if(!listaCalendarios.includes("Calendario de turnos")){
      setExisteCalendario(false);
    }   
  }
  
  const initCalendar = async()=>{
    const defaultCalendarSource =
    Platform.OS === 'ios'
    ? ""
    : { isLocalAccount: true, name: 'Calendario de turnos' };
    try{
      if(existeCalendario){
        const calendarios = await obtenerCalendarios();
        const calendariosFilter = calendarios.filter(item =>item.title==="Calendario de turnos");
        const crearCalendario = calendariosFilter[0].id;
        setCalendario(crearCalendario.toString());
        /* console.log("Filters", crearCalendario.toString()); */
      }else{
        const crearCalendario = await Calendar.createCalendarAsync({
          title: "Calendario de turnos",
          color: Colors.primary,
          entityType: Calendar.EntityTypes.EVENT,
          source: defaultCalendarSource,
          name: "Turnos",
          ownerAccount: 'personal',
          accessLevel: Calendar.CalendarAccessLevel.OWNER,
        })
        setCalendario(crearCalendario);
      }
    }catch(err){
      Alert.alert(
          'No se pudo obtener acceso al calendario',
          'Por favor intente nuevamente',
          [ { text: 'OK'}]
      )
    } 
  }

  /* const setearCalendario = async(calendar)=>{
    setCalendario(calendar);
    console.log("cal!", calendario);
  } */

  const addEventToCalendar = async eventDetails => {
    /* console.log("aca", calendario); */
      const eventIdInCalendar = await Calendar.createEventAsync(calendario, eventDetails);
      setAgregadoAlCalendario(true);
  }

  const handleAgregarAlCalendario = async()=>{
    try{
      await obtenerCalendarios();
      await verificaExisteCalendario();
      await initCalendar();
      await addEventToCalendar(detallesEvento);
    }catch(err){
      Alert.alert(
        'No se pudo obtener la ubicación',
        'Por favor intente nuevamente',
        [ { text: 'OK'}]
      )
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.detail}>
        <Text style={styles.textoDescripcion}>
          <Text>
            <Ionicons name="calendar" size={26} color={Colors.primary} style={{ marginRight: 7 }} />
            <Text> </Text>
            {new Date(fechaYHora).getDate()}/
            {new Date(fechaYHora).getMonth() + 1} -
            {new Date(fechaYHora).toLocaleTimeString([], {hour: "2-digit",minute: "2-digit",})} hs.
          </Text>
        </Text>
        <Text style={styles.textoDescripcion}>
          <Ionicons name="person" size={26} color={Colors.primary} style={{ marginRight: 7 }} />
          <Text> </Text>
          {cliente}
        </Text>
        <Text style={styles.texto}>Descripción del trabajo:</Text>
        <Text style={styles.textoTrabajo}>{descripcion}</Text>
        <TouchableOpacity style={styles.botonAgregarAlCalendario} onPress={handleAgregarAlCalendario}>
          <Text style={styles.textoBoton}> <Ionicons name="calendar" size={16} color="#ffffff" style={{ marginRight: 7 }} /> Agregar al calendario</Text>
        </TouchableOpacity>
        {agregadoAlCalendario ? <Text style={styles.agregadoTxt}>¡Agregado al calendario!</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
  },
  detail: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 60,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginHorizontal: 20,
  },
  textoDescripcion: {
    fontSize: 24,
    marginBottom: 10,
  },
  texto: {
    fontSize: 20,
  },
  textoTrabajo: {
    fontSize: 18,
    textAlign: "center",
    paddingTop: 12,
  },
  botonAgregarAlCalendario:{
    alignItems: 'center',
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  textoBoton:{
    color: "#ffffff",
    fontWeight: 'bold',
    fontSize: 14,
  },
  agregadoTxt:{
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.green,
  }
});

export default PantallaDetallesDeTurno;
