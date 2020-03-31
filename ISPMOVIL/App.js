/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import{Colors} from 'react-native/Libraries/NewAppScreen';
import MyComponent from'./src/test/MyComponent';
import Logo from './src/login/logo';
import Input from './src/login/input';
import Boton from './src/login/button';
import imgPassword from './src/images/pass.png';
import imgUser from './src/images/username.png';
import Constans from './src/login/constans';

const PASS='123';
const USER='user1';
const NUM1 =4;
const NUM2 = 2;

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.body}>
      <View style={styles.container}>
      
      <Logo style={styles.box}></Logo>
      
     
      <Input
      source={imgUser}
      placeholder={Constans.USER}
      secureTextEntry={false}
      autoCorrect={false}
      onChangeText={USER => this.setState({USER})}
      //onChangeText={NUM1 => this.setState({NUM1})}
      />
      <Input
      source={imgPassword}
      placeholder={Constans.PASS}
      secureTextEntry={true}
      autoCorrect={false}
      onChangeText={PASS => this.setState({PASS})}
      //onChangeText={NUM2 => this.setState({NUM2})}
      />
      <Boton pass={PASS} username={USER}
      num1={NUM1} num2={NUM2}></Boton>
      </View>
      
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  body:{
    flex:1,
    flexDirection:'column',
    backgroundColor: '#000',
    //require('./src/images/administracion.png'),
  
  },
  container:{
    flex: .5,
    flexDirection:'column',
    alignItems:'center',
  },
  box:{
    height:100
  },
});

export default App;
