import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import CTextField from '../../Components/CTextField';
import Button from '../../Components/login/Button';
import FirebasePlugin, { firestore } from '../../Plugins/firebase/Firebase';
import TextInput from '../../Components/login/TextInput';

import Constants from '../../Config/Constants';
import Utils from '../../utils/utils';
import Images from '../../Config/Images';

const SettingScreen = () => {
  const [emailName, setEmailName] = useState('');
  
  const [react, setReact] = useState('');
  const [react_native, setReactNative] = useState('');
  const [nameApp, setNameApp] = useState('');

  const [errorEmailName, setErrorEmailName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  

  const onPressAdd = () => {
      addEmailRowToFirebase();

  }
  const addGroupEmails = (emailID, userID) => {
    const emailsAddedRef = firestore
      .collection('emails').doc(userID);
 

    emailsAddedRef.set({
      userID: userID,
    })
      .then(function () {
        setIsLoading(false);
        Alert.alert('USER ID:', emailsAddedRef.id);
      })

      .catch(function (error) {
        Alert.alert('Error al crear', error.message);
        setIsLoading(false);
      });

  }
  const addEmailRowToFirebase = () => {
    setIsLoading(true);

    const emailRef = firestore
    .collection('EINAR_DAVID_COLLECTIONS').doc('GITHUB_APPS')
    .collection(react).doc(react_native);

    const userID = FirebasePlugin.auth().currentUser.uid;

    emailRef.set({
      appID: emailRef.id,
      nameApp: nameApp,
      userID: userID,
    })
      .then(function () {
        setIsLoading(false);
        //addGroupEmails(emailRef.id, userID);
        Alert.alert('Coleccion creada:', emailRef.id);
      })
      .catch(function (error) {
        Alert.alert('Error al crear', error.message);
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(newreact) => {
          setReact(newreact);
        }}
        source={Images.USERNAME}
        placeholder={Constants.STRING.REGISTER}
        secureTextEntry={false}
        autoCorrect={false}
      />
      <TextInput
        onChangeText={(newnative) => {
          setReactNative(newnative);
        }}
        source={Images.USERNAME}
        placeholder={Constants.STRING.REGISTER}
        secureTextEntry={false}
        autoCorrect={false}
      />
      <TextInput
        onChangeText={(nameapp) => {
          setNameApp(nameapp);
        }}
        source={Images.USERNAME}
        placeholder={Constants.STRING.REGISTER}
        secureTextEntry={false}
        autoCorrect={false}
      />

      <Button
        titleButton={Constants.STRING.ADD_EMAIL_BUTTON}
        onPress={onPressAdd}
        isLoading={isLoading}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingScreen;
