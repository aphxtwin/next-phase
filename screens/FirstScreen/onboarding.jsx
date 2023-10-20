import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Ether from '../../assets/ether';
import Bitcoin from '../../assets/btc';
const Onboarding = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>NextPhase</Text>
            <TouchableOpacity style={styles.ctaButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Crear una nueva wallet</Text>
            </TouchableOpacity>
            <View style={styles.logosContainer}>
                <Ether/>
                <Bitcoin />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        color:'white',
        paddingBottom:10,           
        fontWeight: 'bold',
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    ctaButton: {
        paddingHorizontal:68,
        paddingVertical:25,
        borderRadius:100,
        backgroundColor:'white',
    },
    buttonText:{
        font:'Roboto',
        color:'black',
        fontWeight:'600',
    },
    logosContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});

export default Onboarding;
