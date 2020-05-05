import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
import Colors from '../config/Colors';
import Constants from '../config/Constants'

import CVCasos from './CVCasos';

export default class CVCiudad extends Component {
    constructor(props) {
        super(props);

    }
    
    render(){
        return (
            <View style={stylesCVCiudad.container}>
                <Text style={stylesCVCiudad.cityTitle}>
                    {this.props.nombreCiudad}
                </Text>
                <CVCasos
                    onChangeText={this.props.onChangeTextConfirmados}
                    text={Constants.casos_confirmados}
                    placeholder={Constants.ingresar_num}
                    secureTextEntry={false}
                    autoCorrect={false} >
                </CVCasos>
                <CVCasos
                    onChangeText={this.props.onChangeTextSospechosos}
                    text={Constants.casos_sospechosos}
                    placeholder={Constants.ingresar_num}
                    secureTextEntry={false}
                    autoCorrect={false} >
                </CVCasos>
            </View>
        )
    }
};

const stylesCVCiudad = StyleSheet.create({
    cityTitle:{
        color: Colors.white,
        fontSize: 18,
        textDecorationLine: "underline"
    },
    container: {
        flex: 1,
        backgroundColor: Colors.dracula_orchid,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        padding: 8,
        borderRadius: 10,
        marginVertical: 3
    },
});