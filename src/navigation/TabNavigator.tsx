import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { RootStackParamList } from '../types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from '../screens/Account';
import styled from 'styled-components/native';
import { theme } from '../theme';
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
                style={{ marginTop: 20 }}
                source={require('../assets/icons/nav-home.webp')}
                focused={focused}
                accessibilityLabel="Move to Home screen"
              />
            );
          }

          if (route.name === 'Account') {
            return (
              <NavIcon
                style={{ marginTop: 20 }}
                source={require('../assets/icons/nav-profile.webp')}
                focused={focused}
                accessibilityLabel="Move to Account screen"
              />
            );
          }
        },
        tabBarAccessibilityLabel: 'Navigation for Home and Account screens',
        tabBarStyle: {
          height: '10%',
          position: 'absolute',
          paddingHorizontal: '15%',
        },
        tabBarLabelStyle: {
          fontFamily: 'GraphikTrial-Medium',
          marginTop: 7,
          color: theme.colors.text,
        },
        tabBarItemStyle: {},
        headerShown: false,
      })}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
