import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { RootStackParamList } from '../types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from '../screens/Account';
import styled from 'styled-components/native';
import { theme } from '../theme';
import { Platform } from 'react-native';
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

interface NavIconProps {
  readonly source: string;
  readonly focused: boolean;
}
const NavIcon = styled.Image<NavIconProps>`
  width: 20px;
  height: 20px;
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
                style={{ marginTop: Platform.OS === 'android' ? 10 : 20 }}
                source={require('../assets/icons/nav-home.webp')}
                focused={focused}
                accessibilityLabel="Move to Home screen"
              />
            );
          }

          if (route.name === 'Account') {
            return (
              <NavIcon
                style={{ marginTop: Platform.OS === 'android' ? 10 : 20 }}
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
          backgroundColor: theme.colors.white,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,
        },
        tabBarLabelStyle: {
          height: Platform.OS === 'android' ? 25 : 'auto',
          fontFamily: 'GraphikTrial-Medium',
          marginTop: Platform.OS === 'android' ? 0 : 7,
          marginBottom: Platform.OS === 'android' ? 7 : 0,
          color: theme.colors.bottomTabText,
        },
        headerShown: false,
      })}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
