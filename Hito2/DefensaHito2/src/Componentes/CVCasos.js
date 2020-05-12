import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../Config/Colors';

export default class TextInputForm extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
    }
    render() {
        return (
            <View style={stylesTextInput.Contenido}>


                <Text style={stylesTextInput.text}> {this.props.contenido} </Text>

                <View style={stylesTextInput.ContText}>
                    <TextInput
                        onChangeText={this.props.onChangeText}
                        style={stylesTextInput.textInput}
                        placeholder={this.props.placeholder}
                        secureTextEntry={this.props.secureTextEntry}
                        autoCorrect={this.props.autoCorrect}
                        placeholderTextColor={Colors.white}
                        underlineColorAndroid="transparent"
                    />
                </View>

            </View>

        );
    }
}
TextInputForm.PropTypes = {
    source: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired,
    autoCorrect: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
};

const stylesTextInput = StyleSheet.create({
    Contenido:{
        width: '100%',
        //backgroundColor: Colors.blue,
        //position:'absolute',
        //margin:'auto',
        
    },
    ContText: {
        //textAlign: 'center',
        width: '50%',
        //backgroundColor: Colors.red,
        //float: 'right',
        alignSelf: 'flex-end',
        //flexDirection: 'row',
        marginBottom: 5,
        //justifyContent: 'flex-end',
    },
    textInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        //alignItems: 'center',
        //height: 40,
        borderColor: Colors.silver,
        textAlign: 'center',
        
        borderRadius: 15,
        height:35,
        //borderBottomWidth: StyleSheet.hairlineWidth,
        //marginBottom: 20,
    },

    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        //marginTop: 20,
        //textAlign: 'right',
        alignSelf: 'flex-start',
        //backgroundColor: Colors.silver,
        width: '48%',
        //marginTop: 0,
        //justifyContent:'center',
        position: 'absolute',
        top:9,
    },
});
