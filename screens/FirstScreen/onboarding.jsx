import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Ether from '../../assets/ether';
import Bitcoin from '../../assets/btc';
import DoubleLines from '../../assets/doubleLines';
const Onboarding = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.caca}>
                <Text>hola</Text>
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>La llave hacia el futuro económico empieza con una wallet</Text>
                <TouchableOpacity style={styles.ctaButton} onPress={() => navigation.navigate('CreateNewWallet')}>
                    <Text style={styles.buttonText}>Crear nueva wallet</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.logosContainer}>
                <Ether/>
                <DoubleLines/>
                <Bitcoin />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#000',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        color:'white',
        paddingBottom:10,           
        fontWeight: 'bold',
        justifyContent:'center',
    },
    header:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    ctaButton: {
        paddingHorizontal:70,
        paddingVertical:22,
        borderRadius:100,
        backgroundColor:'white',
    },
    buttonText:{
        font:'Roboto',
        color:'black',
        fontSize:18,
        fontWeight:'600',
    },
    logosContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal:15,
        paddingTop:20,
    },
    caca:{
        flex:1,
    }
});

export default Onboarding;
