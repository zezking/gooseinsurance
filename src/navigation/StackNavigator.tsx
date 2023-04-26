import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Auth from '../screens/Auth';
import { RootStackParamList } from '../types';
const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={Auth}></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigator;
