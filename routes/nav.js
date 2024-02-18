import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from './ScreenNames';
import Splash from '../src/Screens/Splash';
import Home from '../src/Screens/Home';
import ProductScreen from '../src/Screens/ProductScreen';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenNames.splash} component={Splash} />
        <Stack.Screen name={ScreenNames.home} component={Home} />
        <Stack.Screen name={ScreenNames.product} component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
