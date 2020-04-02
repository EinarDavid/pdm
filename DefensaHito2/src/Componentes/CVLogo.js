import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import imgLogo from '../images/Logo.png';

export default class Logo extends Component {
  constructor(props)
  {
    console.log(props.text);
    super(props);
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Image source={imgLogo} style={styles.image}></Image>
        <Text style={styles.text}> Epidemia Corona Virus</Text>
        
      </View>
    );
 }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        //justifyContent: 'center',
    },
    image:{
        width:120,
        height:120,
    },
    text:{
        color:'white',
        fontWeight:'bold',
        backgroundColor:'transparent',
        marginTop:-20,
    },
});
