import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../Config/Colors';
import CVCasos from '../Componentes/CVCasos';
import Constans from '../Config/Constans';
export default class TextForm extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
    }
    render() {
        return (
            <View style={stylesTextInput.Cont}>
                <Text style={stylesTextInput.text}> {this.props.titulo}</Text>

                <CVCasos

                    contenido={this.props.contenido}
                    onChangeText={this.props.O1}
                    //source={imgUsername}
                    placeholder={Constans.NUMERO}
                    secureTextEntry={false}
                    autoCorrect={false}>
                </CVCasos>
                <CVCasos
                    contenido={this.props.contenido2}
                    onChangeText={this.props.O2}
                    //source={imgUsername}
                    placeholder={Constans.NUMERO}
                    secureTextEntry={false}
                    autoCorrect={false}>
                </CVCasos>

            </View>
        );
    }
}
TextForm.PropTypes = {
    source: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired,
    autoCorrect: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
};

const stylesTextInput = StyleSheet.create({
    Cont: {
        //marginTop: -500,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        //marginTop: -200,
        textAlign: 'center',
    },
});
