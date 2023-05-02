import { TouchableWithoutFeedback } from 'react-native';
import { Container } from '../components/Container';
import FastImage from 'react-native-fast-image';
import { useAppSelector } from '../redux/hooks';
import { showMessage } from 'react-native-flash-message';
import { Typography } from '../components/Typography';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Card } from '../components/Card';
import { theme } from '../theme';
import { FlatGrid } from 'react-native-super-grid';
import { HomeTabBarLabel } from '../components/HomeTabBarLabel';
import { HomeHeader } from '../components/Headers';
import { useCallback } from 'react';
import { UserData } from '../types';

const productImages = [
  require('../assets/icons/1.webp'),
  require('../assets/icons/2.webp'),
  require('../assets/icons/3.webp'),
  require('../assets/icons/4.webp'),
  require('../assets/icons/5.webp'),
];

const TopTab = createMaterialTopTabNavigator();

const Home = (): JSX.Element => {
  const authRes = useAppSelector(state => state.authRes as UserData);
  if (!authRes?.products) {
    showMessage({
      message: 'Error fetching products',
    });
  }

  const renderItem = useCallback(
    ({ item }: { item: { id: number; title: string } }) => (
      <TouchableWithoutFeedback key={item.id}>
        <Card
          height="106px"
          width="106px"
          alignItems="center"
          justify="center"
          style={{ borderRadius: 12, padding: 14, marginBottom: 10 }}>
          <FastImage
            source={productImages[item.id - 1]}
            style={{ height: 45, width: 45, marginBottom: 5 }}
          />
          <Typography
            fontSize="12px"
            fontWeight="Medium"
            color={theme.colors.textCard}
            style={{ textAlign: 'center' }}>
            {item.title}
          </Typography>
        </Card>
      </TouchableWithoutFeedback>
    ),
    [],
  );

  const ProductTab = () => {
    return (
      <FlatGrid
        itemDimension={90}
        data={authRes.products}
        spacing={7.5}
        style={{ marginTop: -30 }}
        renderItem={renderItem}
        contentContainerStyle={{ height: '100%' }}
      />
    );
  };
  return (
    <Container bgColor={theme.colors.background}>
      <HomeHeader />
      <Typography
        fontSize="14px"
        marginBottom="30px"
        color={theme.colors.textSecondary}>
        Hi {authRes?.user.name}, what would you like to protect?
      </Typography>
      <TopTab.Navigator
        style={{
          width: '100%',
        }}
        sceneContainerStyle={{
          backgroundColor: theme.colors.lightPurple,
          height: '100%',
        }}
        screenOptions={{
          swipeEnabled: false,
          animationEnabled: false,
          tabBarStyle: {
            backgroundColor: theme.colors.background,
            shadowOpacity: 0,
            marginHorizontal: 10,
            elevation: 0,
          },
          tabBarIndicator: () => null,
          tabBarAndroidRipple: { color: null },
        }}>
        <TopTab.Screen
          name="Life & Health"
          component={ProductTab}
          options={{
            tabBarLabel: ({ focused }) => (
              <HomeTabBarLabel focused={focused} name="Life & Health" />
            ),
          }}
        />
        <TopTab.Screen
          name="Travel"
          component={ProductTab}
          options={{
            tabBarLabel: ({ focused }) => (
              <HomeTabBarLabel focused={focused} name="Travel" />
            ),
          }}
        />
        <TopTab.Screen
          name="Property"
          component={ProductTab}
          options={{
            tabBarLabel: ({ focused }) => (
              <HomeTabBarLabel focused={focused} name="Property" />
            ),
          }}
        />
        <TopTab.Screen
          name="Mobility"
          component={ProductTab}
          options={{
            tabBarLabel: ({ focused }) => (
              <HomeTabBarLabel focused={focused} name="Mobility" />
            ),
          }}
        />
      </TopTab.Navigator>
    </Container>
  );
};

export default Home;
