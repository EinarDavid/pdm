import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ButtonLogin from '../../Components/login/Button';
import TextInputLogin from '../../Components/login/TextInput';
import LogoLogin from '../../Components/login/Logo';
import Email from '../../Components/login/EmailTextField';
//import DismissKeyboard from '../../Components/login/DismissKeyboard';

//import Utils from '../../utils/Utlis';

import Images from '../../Config/images';
import Constans from '../../Config/Constans';
import Colors from '../../Config/Colors';



export default class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
        };

        this._onPress = this._onPress.bind(this);
        this._onChangeTextUsername = this._onChangeTextUsername.bind(this);
        this._onChangeTextPassword = this._onChangeTextPassword.bind(this);
        this._onChangeTextEmail = this._onChangeTextEmail.bind(this);
    }
    _onPress() {
        console.log('button preset..!!!');
        console.log(this.state.username);
        console.log(this.state.password);

    }
    _onChangeTextUsername(username) {
        this.setState({ username: username })
    }
    _onChangeTextPassword(password) {
        this.setState({ password: password })
    }
    _onChangeTextEmail() {

    }
    _validateEmailAddress(email) {
        //Utils.isValidEmail
    }
    render() {
        return (
            <View style={stylesLoginScreen.container}>
                
                    <LogoLogin style={stylesLoginScreen.logo} />

                    <View style={stylesLoginScreen.form}>
                        <Email
                            onChangeText={this._onChangeTextEmail}
                            onEndEditing={this._validateEmailAddress}
                            placeholder={Constans.STRING.EMAIL}
                            secureTextEntry={false}
                            autoCorrect={false}
                        >
                        </Email>
                        <TextInputLogin
                            onChangeText={this._onChangeTextUsername}
                            source={Images.USERNAME}
                            placeholder={Constans.STRING.USER}
                            secureTextEntry={false}
                            autoCorrect={false}>
                        </TextInputLogin>

                        <ButtonLogin
                            onPress={this._onPress}
                            titleButton={Constans.STRING.TITLE_BUTTON}>
                        </ButtonLogin>
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
        flex: 1,
        justifyContent: 'center',
        width: '80%',
    },
});
/*<DismissKeyboard>
                <KeyboardAvoidingView  behavior="padding" enabled>
                   <SafeAreaView>
                   </SafeAreaView>
                </KeyboardAvoidingView>
            </DismissKeyboard>
            
            SafeAreaView, KeyboardAvoidingView*/