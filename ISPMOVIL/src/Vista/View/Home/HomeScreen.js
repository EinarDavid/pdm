import React from 'react';
//import { Input, Layout, Text } from '@ui-kitten/components';
import { View, Text,StyleSheet } from 'react-native';
import Colors from '../../Config/Colors';

const HomeScreenInicio = () => {
  return(
  <View style={styles.container}>
    <Text style={styles.Text} category='h1'>Iglesia</Text>
    <View>
      <Text style={styles.Text} category='h6'>Bienvenido</Text>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
      flex: 1,
      alignItems: 'center',
      backgroundColor: Colors.dark2,
      
  },
  Text:{
    color: 'white',
        fontWeight: 'bold',
  },
  
  

});
export default HomeScreenInicio;