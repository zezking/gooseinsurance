import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../src/screens/Home';
import Login from '../src/screens/Login';
import Auth from '../src/screens/Auth';
import { RootStackParamList } from './types';
import { useAppSelector } from './redux/hooks';

const Stack = createNativeStackNavigator<RootStackParamList>();
const AppContainer = (): JSX.Element => {
  const { isAuthenticated } = useAppSelector(state => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuthenticated ? (
          <>
            <Stack.Screen name="Auth" component={Auth}></Stack.Screen>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
          </>
        ) : (
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
