import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import MapPreview from '../components/MapPreview';
import Colors from '../constants/Colors';

const PantallaDetallesDeTurno = ({navigation, route})=>{
    const {cliente, hora, descripcion, ubicacionLat, ubicacionLong} = route.params;
    
    const ubicacionSeleccionada = {
        lat: ubicacionLat,
        lng: ubicacionLong,
    }
    return(
        <View style={styles.screen}>
            <View style={styles.detail}>
                <Text style={styles.textoDescripcion}>{hora} hs.</Text>
                <Text style={styles.textoDescripcion}>{cliente}</Text>
                <Text style={styles.textoDescripcion}>Descripción del trabajo:</Text>
                <Text style={styles.textoDescripcion}>{descripcion}</Text>
                <MapPreview style={styles.mapPreview} location={ubicacionSeleccionada} />
            </View>    
        </View>
    )
}

const styles = StyleSheet.create ({
    screen: {
        flex: 1,
        paddingBottom: 100,
      },
      detail: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textoDescripcion:{
          fontSize: 20,
      },
      mapPreview: {
        borderWidth: 1,
        borderColor: Colors.primary,
        marginVertical: 10,
        width: '80%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
     },
})

export default PantallaDetallesDeTurno;