import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { RootStackParamList } from '../types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from '../screens/Account';
import styled from 'styled-components/native';
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

interface NavIconProps {
  readonly source: string;
  readonly focused: boolean;
}
const NavIcon = styled.Image<NavIconProps>`
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
  tint-color: ${props =>
    props.focused ? props.theme.colors.primary : props.theme.colors.text};
`;
const TabNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Home') {
            return (
              <NavIcon
                source={require('../assets/icons/nav-home.webp')}
                focused={focused}
                accessibilityLabel="Move to Home screen"
              />
            );
          }

          if (route.name === 'Account') {
            return (
              <NavIcon
                source={require('../assets/icons/nav-profile.webp')}
                focused={focused}
                accessibilityLabel="Move to Account screen"
              />
            );
          }
        },
        tabBarAccessibilityLabel: 'Navigation for Home and Account screens',
        tabBarStyle: {
          height: '11%',
          position: 'absolute',
          paddingHorizontal: '15%',
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          color: 'black',
        },
        tabBarItemStyle: {
          marginTop: '5%',
          height: '50%',
        },
      })}>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="Account" component={Account}></Stack.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
