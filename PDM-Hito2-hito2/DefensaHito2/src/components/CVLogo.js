import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import imgLogo from '../images/logo.png';

export default class CVLogo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={stylesCVLogo.container}>
                <Image source={imgLogo} style={stylesCVLogo.Image}/>
                <Text style={stylesCVLogo.Text}>{this.props.title}</Text>
            </View>
        );
    }
};

const stylesCVLogo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Image: {
        width: 60,
        height: 80
    },
    Text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 0,
        fontSize: 20
    }
})