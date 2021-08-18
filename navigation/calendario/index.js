import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PantallaCalendario from '../../screens/PantallaCalendario';

import Colors from '../../constants/Colors';
const Stack = createStackNavigator();

const CalendarioNavigator = ()=>{
    return(
        <Stack.Navigator initialRouteName="Agenda de turnos">

            <Stack.Screen  
                name="Agenda de turnos"
                component={PantallaCalendario}
                options={{
                    title: 'Agenda de turnos',
                    headerStyle:{
                        backgroundColor: Colors.primary,
                    },
                    headerTintColor: '#fff',
                }}
            />

        </Stack.Navigator>
    )
}

export default CalendarioNavigator;