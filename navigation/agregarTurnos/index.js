import React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import PantallaAgregarTurno from '../../screens/PantallaAgregarTurno';

const AgregarTurnosStack = createStackNavigator();

const AgregarTurnosNavigator = ()=>{
    return(
        <AgregarTurnosStack.Navigator 
            initialRouteName="Agregar Turnos"
        >
            <AgregarTurnosStack.Screen 
                name="Agregar Turnos"
                component={PantallaAgregarTurno}
                options={{
                    title: 'Agregar turnos',
                    headerStyle:{
                        backgroundColor: Colors.primary,
                    },
                    headerTintColor: '#fff',
                }}
            />
        </AgregarTurnosStack.Navigator>
)
}

export default AgregarTurnosNavigator;