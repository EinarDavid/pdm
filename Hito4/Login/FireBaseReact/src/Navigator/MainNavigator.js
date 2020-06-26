import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from '../View/login/LoginScreen';
import RegisterScreen from '../View/register/Register';
import AppScreen from '../View/App/AppScreen';
import SettingScreen from '../View/Setting/SettingScreen';

import Colors from '../Config/Colors';
import SplashScreen from '../View/Splash/SplashScreen';

const Stack = createStackNavigator();
const StackScreen = ({ route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        initialParams={{ route }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'Register Form',
          headerStyle: {
            backgroundColor: Colors.appPrimary,
          },
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.white,
          },
        }}
      />
    </Stack.Navigator>
  );
}

const Drawer = new createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='App'
        component={AppScreen}
        options={{
          title: 'App Main',
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{ title: 'Settings' }}
      />
    </Drawer.Navigator>
  );
}

const MainStack = createStackNavigator();
const MainStackScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLogged, setIsLogged] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 2000);
  }, []);
  return (
    <MainStack.Navigator headerMode="none">
      {isLoading ? (<MainStack.Screen name="Loading" component={SplashScreen} />)
        : isLogged ?
          (<MainStack.Screen name="DrawerNavigator" component={DrawerScreen} />)
          : (<MainStack.Screen name="LoginRegister" component={StackScreen} initialParams={{ setIsLogged }} />)}
    </MainStack.Navigator>
  );
}

const mainNavigator = () => {

  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  );

}
export default mainNavigator;
