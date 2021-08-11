import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

import AgregarTurnosNavigator from '../agregarTurnos';
import TurnosNavigator from '../listaDeturnos';

const TabStack = createBottomTabNavigator();

const TabNavigator = ()=>{
    return(
        <TabStack.Navigator 
            initialRouteName="Lista de turnos"
            tabBarOptions={{
                showLabel: false,
                style:{
                    ...styles.tabBar,
                    ...styles.shadow
                }
            }}
        >
            <TabStack.Screen 
                name="Lista de turnos" 
                component={TurnosNavigator}
                options={{
                    tabBarIcon: ({ focused })=>(
                        <View style={styles.item}>
                            {focused ? 
                                <Ionicons name="list-circle" size={24} color="#ffffff" /> 
                                : 
                                <Ionicons name="list" size={24} color="#ffffff" />
                            }
                            <Text style={styles.iconText}>Lista de turnos</Text>
                        </View>
                    )
                }}
            />
            <TabStack.Screen 
                name="Agregar Turnos" 
                component={AgregarTurnosNavigator}
                options={{
                    tabBarIcon: ({ focused })=>(
                        <View style={styles.item}>
                            {focused ?
                                <Ionicons name="add-circle" size={24} color="#ffffff" />
                                :
                                <Ionicons name="add-circle-outline" size={24} color="#ffffff" />
                            }
                            <Text style={styles.iconText}>Agregar turnos</Text>
                        </View>
                    )
                }} 
            />
        </TabStack.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        height: 60,
        backgroundColor: Colors.primary,
      },
      shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
      },
      item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      iconText:{
          color: '#ffffff',
      }
})

export default TabNavigator;


