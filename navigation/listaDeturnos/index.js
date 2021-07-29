import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PantallaInicio from '../../screens/PantallaInicio';
import PantallaDetallesDeTurno from '../../screens/PantallaDetallesDeTurno';
import Colors from '../../constants/colors';
const Stack = createStackNavigator();

const TurnosNavigator = ()=>{
    return(
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen 
                name="Home"
                component={PantallaInicio}
                options={{
                    title: 'Lista de turnos',
                    headerStyle:{
                        backgroundColor: Colors.primary,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen 
                name="DetallesTurno"
                component={PantallaDetallesDeTurno}
                options={{
                    title: 'Detalles del turno',
                    headerStyle:{
                        backgroundColor: Colors.primary,
                    },
                    headerTintColor: '#fff',
                }}
            />
        </Stack.Navigator>
)
}

export default TurnosNavigator;