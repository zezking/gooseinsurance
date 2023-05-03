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
import { useCallback, useState } from 'react';
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
  const [tabContainerColor, setTabContainerColor] = useState<string>(
    theme.colors.lightPurple,
  );
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

  const ProductTab = ({ indexStart }: { indexStart: number }): JSX.Element => {
    //Rendering different number of items and background colors in each product section to show the topTabBar is dynamic
    const items = authRes.products.slice(indexStart);
    return (
      <FlatGrid
        itemDimension={90}
        data={items}
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
          backgroundColor: tabContainerColor,
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
          options={{
            tabBarLabel: ({ focused }) => (
              <HomeTabBarLabel
                focused={focused}
                name="Life & Health"
                color={tabContainerColor}
              />
            ),
          }}
          listeners={{
            tabPress: () => setTabContainerColor(theme.colors.lightPurple),
          }}>
          {props => <ProductTab indexStart={0} {...props} />}
        </TopTab.Screen>
        <TopTab.Screen
          name="Travel"
          options={{
            tabBarLabel: ({ focused }) => (
              <HomeTabBarLabel
                focused={focused}
                name="Travel"
                color={tabContainerColor}
              />
            ),
          }}
          listeners={{
            tabPress: () => setTabContainerColor(theme.colors.lightGreen),
          }}>
          {props => <ProductTab indexStart={1} {...props} />}
        </TopTab.Screen>
        <TopTab.Screen
          name="Property"
          options={{
            tabBarLabel: ({ focused }) => (
              <HomeTabBarLabel
                focused={focused}
                name="Property"
                color={tabContainerColor}
              />
            ),
          }}
          listeners={{
            tabPress: () => setTabContainerColor(theme.colors.lightYellow),
          }}>
          {props => <ProductTab indexStart={2} {...props} />}
        </TopTab.Screen>
        <TopTab.Screen
          name="Mobility"
          options={{
            tabBarLabel: ({ focused }) => (
              <HomeTabBarLabel
                focused={focused}
                name="Mobility"
                color={tabContainerColor}
              />
            ),
          }}
          listeners={{
            tabPress: () => setTabContainerColor(theme.colors.lightBlue),
          }}>
          {props => <ProductTab indexStart={3} {...props} />}
        </TopTab.Screen>
      </TopTab.Navigator>
    </Container>
  );
};

export default Home;
