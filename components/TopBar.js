import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopBar = ()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.topBarContent}>TurnosApp</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    topBarContent:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        backgroundColor: '#485665',
        color: '#ffffff',
        fontSize: 24,
        fontFamily: 'montserrat-bold',
    }
})

export default TopBar;