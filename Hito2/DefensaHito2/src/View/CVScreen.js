import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import ButtonC from '../Componentes/Button';
import CVCiudad from '../Componentes/CVCiudad';
import CVLogo from '../Componentes/CVLogo';
//import CVTEXT from '../Componentes/CVCasos';

import Constans from '../Config/Constans';
import Colors from '../Config/Colors';

export default class CVScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CBBACC: 0,
            CBBACS: 0,
            SCCC: 0,
            SCCS: 0,
            ORCC: 0,
            ORCS: 0,

            RES: '',
        };

        this._onPress = this._onPress.bind(this);
        this._onChangeCBBACC = this._onChangeCBBACC.bind(this);
        this._onChangeCBBACS = this._onChangeCBBACS.bind(this);
        this._onChangeSCCC = this._onChangeSCCC.bind(this);
        this._onChangeSCCS = this._onChangeSCCS.bind(this);
        this._onChangeORCC = this._onChangeORCC.bind(this);
        this._onChangeORCS = this._onChangeORCS.bind(this);

        this._onPressCon = this._onPressCon.bind(this);
    }
    _onPress() {
        console.log('button preset..!!!');
        let C, S, O;
        if (this.state.RES === "C") {
            C = this.state.CBBACC;
            S = this.state.SCCC;
            O = this.state.ORCC;
        }
        else if (this.state.RES === "S") {
            C = this.state.CBBACS;
            S = this.state.SCCS;
            O = this.state.ORCS;
        }
        else {
            console.log('Ingrese C o S')
        }
        let R = Math.max(C, S, O);
        console.log('El mayor es: ' + R);
        /*if(this.state.RES =="C"){
            if(this.state.CBBACC >this.state.SCCC & this.state.CBBACC>this.state.ORCC){
                console.log('Cochabamba es el mayor con casos confirmados' + this.state.CBBACC);
                console.log('entro CBBA');
            }
            else if(this.state.SCCC >this.state.CBBACC & this.state.SCCC > this.state.ORCC){
                console.log('Santa Cruz es el mayor con casos confirmados' + this.state.SCCC)
            }else{
                console.log('Oruro es el mayor con casos confirmados' + this.state.ORCC)
            }
        }
        else if(this.state.RES =="S"){
            if(this.state.CBBACS >this.state.SCCS & this.state.CBBACS>this.state.ORCS){
                console.log('Cochabamba es el mayor con casos sospechosos')
            }
            else if(this.state.SCCS >this.state.CBBACS & this.state.SCCS > this.state.ORCS){
                console.log('Santa Cruz es el mayor con casos sospechosos')
            }else{
                console.log('Oruro es el mayor con casos sospechosos')
            }
        }*/

    }
    _onPressCon(RES) {
        this.setState({ RES: RES })
    }
    _onChangeCBBACC(CBBACC) {
        this.setState({ CBBACC: CBBACC })
    }
    _onChangeCBBACS(CBBACS) {
        this.setState({ CBBACS: CBBACS })
    }
    _onChangeSCCC(SCCC) {
        this.setState({ SCCC: SCCC })
    }
    _onChangeSCCS(SCCS) {
        this.setState({ SCCS: SCCS })
    }
    _onChangeORCC(ORCC) {
        this.setState({ ORCC: ORCC })
    }
    _onChangeORCS(ORCS) {
        this.setState({ ORCS: ORCS })
    }
    render() {
        return (
            <View style={stylesLoginScreen.container}>
                <CVLogo style={stylesLoginScreen.logo} />

                <View style={stylesLoginScreen.form}>

                    <CVCiudad
                        titulo={Constans.CBBA}
                        contenido={Constans.CC}
                        O1={this._onChangeCBBACC}

                        placeholder={Constans.NUMERO}
                        secureTextEntry={false}
                        autoCorrect={false}
                        contenido2={Constans.CS}
                        O2={this._onChangeCBBACS}
                    >
                    </CVCiudad>
                    <CVCiudad
                        titulo={Constans.SC}
                        contenido={Constans.CC}
                        //onChangeText={this._onChangeTextUsername}
                        O1={this._onChangeSCCC}
                        placeholder={Constans.NUMERO}
                        secureTextEntry={false}
                        autoCorrect={false}
                        contenido2={Constans.CS}
                        O2={this._onChangeSCCS}
                    >
                    </CVCiudad>
                    <CVCiudad
                        titulo={Constans.OR}
                        contenido={Constans.CC}
                        //onChangeText={this._onChangeTextUsername}
                        O1={this._onChangeORCC}
                        placeholder={Constans.NUMERO}
                        secureTextEntry={false}
                        autoCorrect={false}
                        contenido2={Constans.CS}
                        O2={this._onChangeORCS}
                    >
                    </CVCiudad>

                    <TextInput

                        style={stylesLoginScreen.Bus}
                        placeholder={Constans.BUS}
                        secureTextEntry={false}
                        autoCorrect={false}
                        onChangeText={this._onPressCon}


                        placeholderTextColor={Colors.white}
                        underlineColorAndroid="transparent"
                    />
                    <ButtonC
                        onPress={this._onPress}
                        titleButton={Constans.TITLE_BUTTON}>
                    </ButtonC>
                </View>
            </View>
        );
    }
}

const stylesLoginScreen = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: Colors.dark,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    form: {
        marginTop: -350,
        flex: 1,
        //justifyContent: 'center',
        width: '80%',
    },
    Bus: {
        width: '60%',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderColor: Colors.silver,
        textAlign: 'center',
        borderRadius: 15,
        height: 35,
        marginBottom: 5,
        alignSelf: 'center',
        marginTop: 40,
    },
});
/*

*/