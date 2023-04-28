import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Auth from '../screens/Auth';
import { RootStackParamList } from '../types';
import FastImage from 'react-native-fast-image';
const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
