import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../View/Login/LoginScreen';
import RegisterScreen from '../View/Register/Register';
const Stack = createStackNavigator();

function mainNavigator(){
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{title: 'Register From'}}
            />
            
          </Stack.Navigator>
        </NavigationContainer>
      );
}
export default mainNavigator;