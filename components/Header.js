import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Header = (props)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#2B9EB3',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },  
    title:{
        color: '#ffffff',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'montserrat-bold'
    }
})

export default Header;