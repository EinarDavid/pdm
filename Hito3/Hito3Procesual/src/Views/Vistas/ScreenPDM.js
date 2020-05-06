import React from 'react';
import { StyleSheet, View, SafeAreaView} from 'react-native';

import Constants from '../../Config/Constants';
import Images from '../../Config/Images';
import Colors from '../../Config/Colors';

import Screen from '../../Components/Vista';
import Button from '../../Components/ButtonNav';


const FormRegScreen = ({ navigation }) => {

    const _onPress = () => {
        navigation.navigate('ScreenDefensa');
    };
    return (

        <View style={styles.container}>
            <SafeAreaView>
                <Screen
                    source={Images.FONDO1}
                    Titulo={Constants.STRINGS.TITULO1}
                    Contenido={Constants.STRINGS.CONTENIDO1}></Screen>
                <View style={styles.buton}>
                    <Button
                        onPress={_onPress}
                        Accion={Constants.STRINGS.NETX}></Button>
                </View>
            </SafeAreaView>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.appPrimary,
        flex: 1,
    },
    
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
    },
    buton: {
        alignItems: 'flex-end',
        marginRight: 10,
        marginTop: 50,
    },


});
export default FormRegScreen;

