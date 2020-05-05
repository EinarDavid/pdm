import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
import Colors from '../config/Colors';

export default class CVCasos extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={stylesCVCasos.container}>
                <Text style={stylesCVCasos.text}>
                    {this.props.text}
                </Text>
                <TextInput
                    onChangeText={this.props.onChangeText}
                    style={stylesCVCasos.textInput}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}
                    placeholderTextColor={Colors.white}
                    underlineColorAndroid="transparent">
                </TextInput>
            </View>
        )
    }
};

const stylesCVCasos = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    text: {
        position: "absolute",
        left: 10,
        marginVertical: 8,
        width: '50%',
        color: Colors.white,
        fontSize: 16
    },
    textInput: {
        backgroundColor: Colors.american_river,
        alignContent: 'flex-end',
        alignSelf: "flex-end",
        height: 40,
        borderColor: Colors.silver,
        paddingLeft: 10,
        borderRadius: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        color: Colors.black,
        width: '50%'
    },
});