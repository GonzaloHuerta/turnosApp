import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import PantallaAgregarTurno from '../screens/PantallaAgregarTurno';
import PantallaInicio from '../screens/PantallaInicio';

const Stack = createStackNavigator();

const Navigator = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home"
            >
                <Stack.Screen 
                    name="Home"
                    component={PantallaInicio}
                    options={{title: 'Inicio'}}
                />
                <Stack.Screen 
                    name="AgregarTurno"
                    component={PantallaAgregarTurno}
                    options={{title: 'Agregar turno'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;