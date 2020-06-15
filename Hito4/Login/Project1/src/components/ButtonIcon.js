import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity,Image} from 'react-native';
import Colors from '../config/Colors';

const ButtonIcon = ({onPressButton, ImgSrc}) =>{
    return (
        
          <TouchableOpacity style={styles.button} onPress={onPressButton}>
            <Image style={styles.Image} source={ImgSrc} />
          </TouchableOpacity>       
       
    );
}
const styles= StyleSheet.create({
    button: { 
        display: 'flex', 
        height: 30, 
        width: 30, 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: 10 
      }, 
      Image: { 
        padding: 10, 
        margin: 5, 
        height: 25, 
        width: 25, 
        resizeMode: 'stretch' 
      } 
});
export default ButtonIcon;