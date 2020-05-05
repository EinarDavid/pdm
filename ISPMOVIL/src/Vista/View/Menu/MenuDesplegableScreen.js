import React, { Component } from "react";
import { View,  Text, Alert } from 'react-native';

import HomeScreem from '../Home/HomeScreen';
import FormBauScreem from '../FormularioNew/FormRegistroScreen';
import FormSolScreem from '../FormularioNew/FormRegSolScreen';
import FormTransScreem from '../FormularioNew/FormRegTransScreen';
import FormRegUsScreem from '../FormularioNew/FormRegUs';
//import NavegacionPilaPrueba from "./NavegacionPilaPrueba";
//import NavegacionAbajo from "./NavegacionAbajo";

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

function NavegacionPrincipal(){
    return (
      <Drawer.Navigator>
       <Drawer.Screen name="Home" component={HomeScreem} />
       <Drawer.Screen name="Registro por Bautizo" component={FormBauScreem} />
       <Drawer.Screen name="Registro por Solicitud" component={FormSolScreem} />
       <Drawer.Screen name="Registro por Transferencia" component={FormTransScreem} />
       <Drawer.Screen name="Registro de Usuarios" component={FormRegUsScreem} />

      </Drawer.Navigator>
      );
}
export default NavegacionPrincipal;