import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import RegisterScreen from '../View/Register/Register';
import LoginScreen2 from '../View/Login/LoginScreen2';
import AppScreen from '../View/App/AppScreen';

import Colors from '../config/Colors';

const Stack = createStackNavigator();

function mainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator  >
                <Stack.Screen
                    name="Login"
                    component={LoginScreen2}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{
                        title:'Register From',
                        headerStyle:{
                            backgroundColor: Colors.appPrimary,
                        },
                        headerTintColor: Colors.black,
                        headerTitleStyle: {
                            fontWeigth: 'bold',
                            color:Colors.white,
                            fontSize: 25,
                        },
                        }}
                />
                <Stack.Screen
                    name = 'App'
                    component={AppScreen}
                    options={{
                        title:'App Main',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default mainNavigator;
//headerMode="none"