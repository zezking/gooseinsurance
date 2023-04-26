import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAppSelector } from './redux/hooks';
import StackNavigator from './navigation/StackNavigator';
import TabNavigator from './navigation/TabNavigator';

const AppContainer = (): JSX.Element => {
  const { isAuthenticated } = useAppSelector(state => state);

  return (
    <NavigationContainer>
      {!isAuthenticated ? <StackNavigator /> : <TabNavigator />}
    </NavigationContainer>
  );
};

export default AppContainer;
