import React, { useLayoutEffect, useState, useEffect } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'

import Colors from '../../config/Colors';
import Image from '../../config/images';
import ButtonIcon from '../../components/ButtonIcon';
import FirebasePlugin from '../../plugins/firebase/Firebase';
const AppScreen = ({ navigation }) => {
    const onPressSetting = () => {
        Alert.alert('Setting button Pressed!!!')
    }
    const onPressLogout = () => {
        try{
            FirebasePlugin.auth().signOut()
            .then(() => {
                Alert.alert('Logout App', 'Successfully Logout', [{
                    text: 'Login App', onPress: () => {navigation.navigate('Login')}
                }]);
            });
        }catch (e) {
            Alert.alert('Contact Admin', e.message);
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <ButtonIcon ImgSrc={Image.SETTINGS} onPressButton={onPressSetting} />
            ),
            headerRight: () => (
                <ButtonIcon ImgSrc={Image.LOGOUT} onPressButton={onPressLogout}/>
            ),
        });
    });
    return (
        <View style={styles.container}>
            <Text>App Screen</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue,
        alignItems: 'center',
    },
});

export default AppScreen;