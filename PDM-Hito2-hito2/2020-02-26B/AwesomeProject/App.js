/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import MyComponent from './src/test/MyComponent.js';
import Logo from './src/login/logo.js';
import Input from './src/login/input';
import button from './src/login/button';

import imgPass from './src/images/pass.png';
import imgUsername from './src/images/username.png';

import Constants from './src/login/constants';

const App: () => React$Node = () => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Logo/>
        <MyComponent style={styles.box} text="Test string"></MyComponent>
        <Input
          source={imgUsername}
          placeholder={Constants.USER}
          secureTextEntry={false}
          autoCorrect={false}/>
        <Input
          source={imgPass}
          placeholder={Constants.PASS}
          secureTextEntry={true}
          autoCorrect={false}/>
        <button
          pass={Constants.PASS}
          user={Constants.USER}/>
      </View>
    </View> 
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.primary
  },
  container: {
    flex: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  box: {
    height: 100
  }
});

export default App;
