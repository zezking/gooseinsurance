/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Auth from './src/screens/Auth';
import { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Auth" component={Auth}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
