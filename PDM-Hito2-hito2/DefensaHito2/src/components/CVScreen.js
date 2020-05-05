import React, {Component} from 'react';

import CVCiudad from './CVCiudad';
import CVLogo from './CVLogo';
import {StyleSheet, View, TextInput, Button } from 'react-native';
import Colors from '../config/Colors';
import Constants from '../config/Constants';

export default class CVScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            busqueda: "",
            ConfirmadosCB: 0,
            SospechososCB: 0,

            ConfirmadosSC: 0,
            SospechososSC: 0,

            ConfirmadosOR: 0,
            SospechososOR: 0
        }

        this._onPressCalculo = this._onPressCalculo.bind(this);
        this._onChangeTextBusqueda = this._onChangeTextBusqueda.bind(this);
        this._onChangeTextConfirmadosCB = this._onChangeTextConfirmadosCB.bind(this);
        this._onChangeTextSospechososCB = this._onChangeTextSospechososCB.bind(this);
        this._onChangeTextConfirmadosSC = this._onChangeTextConfirmadosSC.bind(this);
        this._onChangeTextSospechososSC = this._onChangeTextSospechososSC.bind(this);
        this._onChangeTextConfirmadosOR = this._onChangeTextConfirmadosOR.bind(this);
        this._onChangeTextSospechososOR = this._onChangeTextSospechososOR.bind(this);
    }

    _onPressCalculo() {
        console.log(this.state);
        var v1, v2, v3;
        var terminoBusqueda = this.state.busqueda.toLowerCase().substr(0, 3);
        if(terminoBusqueda=="con") {
            v1 = this.state.ConfirmadosCB;
            v2 = this.state.ConfirmadosSC;
            v3 = this.state.ConfirmadosOR;
        }
        if(terminoBusqueda=="sos") {
            v1 = this.state.SospechososCB;
            v2 = this.state.SospechososSC;
            v3 = this.state.SospechososOR;
        }
        var MaxVal = Math.max(v1, v2, v3);
        if(v1 == MaxVal){
            console.log("Cochabamba: " + v1 + " casos");
        }
        if(v2 == MaxVal){
            console.log("Santa Cruz: " + v2 + " casos");
        }
        if(v3 == MaxVal){
            console.log("Oruro: " + v3 + " casos");
        }
    }
    _onChangeTextBusqueda(busqueda) {
        this.setState({
            busqueda: busqueda
        })
    }
    _onChangeTextConfirmadosCB(ConfirmadosCB) {
        this.setState({
            ConfirmadosCB: parseInt(ConfirmadosCB)
        })
    }
    _onChangeTextSospechososCB(SospechososCB) {
        this.setState({
            SospechososCB: parseInt(SospechososCB)
        })
    }
    _onChangeTextConfirmadosSC(ConfirmadosSC) {
        this.setState({
            ConfirmadosSC: parseInt(ConfirmadosSC)
        })
    }
    _onChangeTextSospechososSC(SospechososSC) {
        this.setState({
            SospechososSC: parseInt(SospechososSC)
        })
    }
    _onChangeTextConfirmadosOR(ConfirmadosOR) {
        this.setState({
            ConfirmadosOR: parseInt(ConfirmadosOR)
        })
    }
    _onChangeTextSospechososOR(SospechososOR) {
        this.setState({
            SospechososOR: parseInt(SospechososOR)
        })
    }

    render() {
        return(
            <View style={stylesCVScreen.container}>
                <CVLogo 
                    style={stylesCVScreen.logo}
                    title={Constants.title}/>
                <CVCiudad
                    nombreCiudad={Constants.nombreCB}
                    onChangeTextConfirmados={this._onChangeTextConfirmadosCB}
                    onChangeTextSospechosos={this._onChangeTextSospechososCB}/>
                <CVCiudad
                    nombreCiudad={Constants.nombreSC}
                    onChangeTextConfirmados={this._onChangeTextConfirmadosSC}
                    onChangeTextSospechosos={this._onChangeTextSospechososSC}/>
                <CVCiudad
                    nombreCiudad={Constants.nombreOR}
                    onChangeTextConfirmados={this._onChangeTextConfirmadosOR}
                    onChangeTextSospechosos={this._onChangeTextSospechososOR}/>

                <TextInput 
                    onChangeText={this._onChangeTextBusqueda} 
                    style={stylesCVScreen.textInput}/>

                <Button
                    title={Constants.calcular}
                    onPress={this._onPressCalculo}>
                </Button>
            </View>
        )
    }
};

const stylesCVScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        color: Colors.silver,
        padding: '5%'
    },
    textInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        alignItems: 'center',
        height: 40,
        borderColor: Colors.silver,
        paddingLeft: 40,
        borderRadius: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 10,
        color: Colors.black
    }
});