import React , { useState, useEffect } from 'react';
import { View, Button, TouchableOpacity, Text, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import Colors from '../constants/Colors';
import MapPreview from './MapPreview';

const LocationPicker = (props)=>{
    const [isLoading, setIsLoading] = useState(false);
    const [pickedLocation, setPickedLocation] = useState();

    useEffect(()=>{
        const solicitarPermisos = async()=>{
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted'){
                Alert.alert(
                    'Permisos insuficientes',
                    'Necesita dar permisos de ubicación',
                    [{ text: 'OK' }]
                );
            }
        }
        solicitarPermisos();
    }, []);
    const getLocationHandler = async() =>{
        try{
            setIsLoading(true);
            const location = await Location.getCurrentPositionAsync({
                timeout: 5000,
            });
            setPickedLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            })
            props.handleSetUbicacion(location.coords.latitude, location.coords.longitude);
        }catch(err){
            Alert.alert(
                'No se pudo obtener la ubicación',
                'Por favor intente nuevamente',
                [ { text: 'OK'}]
            )
        }finally{
            setIsLoading(false);
        }
    }

    return(
        <View style={styles.locationPicker}>
            <MapPreview style={styles.mapPreview} location={pickedLocation}>
            {
                isLoading ? 
                <ActivityIndicator size="large" color={Colors.primary} />
                :
                <Text>Seleccionar ubicación</Text>
            }
            </MapPreview>
            <TouchableOpacity onPress={getLocationHandler} style={styles.botonObtenerUbicacion}>
                <Text style={styles.textoBoton}>Obtener Ubicación</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    locationPicker:{
        marginVertical: 10,
    },
    mapPreview:{
        borderWidth: 1,
        borderColor: Colors.primary,
        marginBottom: 10,
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botonObtenerUbicacion:{
        alignItems: 'center',
        backgroundColor: Colors.secondary,
        padding: 10,
    },
    textoBoton:{
        color: "#000000",
        fontWeight: 'bold',
      },
})

export default LocationPicker;
