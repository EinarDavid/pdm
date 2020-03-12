/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
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

/*import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';*/
import{Colors} from 'react-native/Libraries/NewAppScreen';
import MyComponent from'./src/test/MyComponent';
import Logo from './src/login/logo';

const App: () => React$Node = () => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
      <MyComponent style={styles.box} text="Hola Mundo Desde React"></MyComponent>
      <MyComponent style={styles.box} text="ED"></MyComponent>
      <Logo style={styles.box}></Logo>
      </View>
      
    </View>
  );
};



const styles = StyleSheet.create({
  body:{
    flex:1,
    flexDirection:'column',
    backgroundColor: Colors.primary,
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
/*
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
}); */