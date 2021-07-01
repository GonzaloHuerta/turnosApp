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
        height: 40,
        marginBottom: 15,
        width: '100%',
    },
    title:{
        color: '#485665',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'montserrat-regular',
    }
})

export default Header;