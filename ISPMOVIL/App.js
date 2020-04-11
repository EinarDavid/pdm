import React, { Component } from 'react';
//import 'react-native-gesture-handler';

//import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';

import { EvaIconsPack } from '@ui-kitten/eva-icons';
//import { mapping, light as theme } from '@eva-design/eva';
import AppNavigator from './src/Vista/Components/Navigation/navigation.component';


import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';

import LoginScreen from './src/Vista/View/Login/LoginScreen';
import MenuScreen from './src/Vista/View/Menu/MenuScreen';
import RegistroUsScreen from './src/Vista/View/Formularios/Registro_Usuario';
import RegistroBauScreen from './src/Vista/View/Formularios/Registro_Bautizo';
import RegistroTransScreen from './src/Vista/View/Formularios/Registro_Transferencias';
import RegistroNiScreen from './src/Vista/View/Formularios/Registro_Niños';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
);

const App: () => React$Node = () => {
  return (
    
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <LoginScreen></LoginScreen>
  </ApplicationProvider>
    //<RegistroBauScreen></RegistroBauScreen>
    //<RegistroUsScreen></RegistroUsScreen>
    //<MenuScreen></MenuScreen>
    //<RegistroTransScreen></RegistroTransScreen>
    //<HomeScreen />
    //<RegistroNiScreen></RegistroNiScreen>
  );
};
export default App;

/*

//
//



<React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={theme}>
        <AppNavigator />
      </ApplicationProvider>
    </React.Fragment>
*/