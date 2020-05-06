import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import Constants from '../../Config/Constants';
import Images from '../../Config/Images';
import Colors from '../../Config/Colors';

import Screen from '../../Components/Vista';
import Button from '../../Components/ButtonNav';


const FormRegScreen = ({ navigation }) => {

    const _onPressPrev = () => {
        navigation.navigate('ScreenDefensa');
    };
    const _onPressNext = () => {
        navigation.navigate('Login');
    };
    return (

        <View style={styles.container}>
            <SafeAreaView>
                <Screen
                    source={Images.FONDO3}
                    Titulo={Constants.STRINGS.TITULO3}
                    Contenido={Constants.STRINGS.CONTENIDO3}></Screen>
                <View >
                    <View style={styles.butonPrev}>
                        <Button
                            onPress={_onPressPrev}
                            Accion={Constants.STRINGS.PREV}></Button>
                    </View>
                    <View style={styles.butonNext}>
                        <Button
                            onPress={_onPressNext}
                            Accion={Constants.STRINGS.NETX}></Button>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.blue,
        flex: 1,
    },
    
    butonPrev: {
        alignItems: 'flex-start',
        position: 'absolute',
        marginLeft: 10,
        marginTop: 50,
    },
    butonNext: {
        alignItems: 'flex-end',
        marginRight: 10,
        marginTop: 50,
    },


});
export default FormRegScreen;

