import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['ar'] = {
  monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
  monthNamesShort: ['Ene.','Feb.','Mar','Abr','May','Jun','Jul.','Ago','Sep.','Oct.','Nov.','Dic.'],
  dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
  dayNamesShort: ['Dom.','Lun.','Mar.','Mie.','Jue.','Vie.','Sab.'],
  today: 'Aujourd\'hui'
};

LocaleConfig.defaultLocale = 'ar';

const PantallaCalendario = () => {
  return (
    <Agenda
      // The list of items that have to be displayed in agenda. If you want to render item as empty date
      // the value of date key has to be an empty array []. If there exists no value for date key it is
      // considered that the date in question is not yet loaded
      items={{
        "2021-08-10": [{ name: "item 1 - any js object" }],
        "2021-08-19": [{ name: "item 2 - any js object", height: 80 }],
        "2021-08-18": [],
        "2021-08-17": [
          { name: "item 3 - any js object" },
          { name: "any js object" },
        ],
      }}
      renderItem={(item, firstItemInDay) => {return (
          <View style={styles.container}>
              <Text >{item.name}</Text>
          </View>
            
            );
        }}
        renderEmptyDate={() => {return (
            <View style={styles.container}>
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
})

export default PantallaCalendario;
