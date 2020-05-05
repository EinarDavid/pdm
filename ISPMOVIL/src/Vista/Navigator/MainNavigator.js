import React, { Component } from "react";
import { View, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import NavegacionDesplegable from "../View/Menu/MenuDesplegableScreen";


const Stack = createStackNavigator();
export default class NavegacionPrincipal extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen
            name="Desplegables"
            children={NavegacionDesplegable}
            options={{
              title: "Desplegable"
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

/*




import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Inicio from '../View/Home/HomeScreen';
import FormularioRegBau from '../View/FormularioNew/FormRegistroScreen';
import FormularioRegSol from '../View/FormularioNew/FormRegSolScreen';
import MenuScreen from '../View/Menu/MenuScreen';

const Stack = createStackNavigator();

function mainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Menu"
                    component={MenuScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Reg"
                    component={FormularioRegBau}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={Inicio}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Register"
                    component={FormularioRegSol}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default mainNavigator;
*/