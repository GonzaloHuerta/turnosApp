import React from 'react';
import { View, StyleSheet} from 'react-native';

import FormAgregarTurno from '../components/FormAgregarTurno';

const PantallaAgregarTurno = ()=>{
    return(
        <View style={styles.container}>
            <FormAgregarTurno />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
  });

export default PantallaAgregarTurno;