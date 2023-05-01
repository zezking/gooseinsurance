import FastImage from 'react-native-fast-image';
import { Container } from './Container';
import { Typography } from './Typography';
import { View } from 'react-native/';
import { theme } from '../theme';

interface HomeTabBarLabelProps {
  focused: boolean;
  name: string;
}
export const HomeTabBarLabel = ({ focused, name }: HomeTabBarLabelProps) => {
  const Triangle = () => {
    return (
      <View
        style={{
          width: 0,
          height: 0,
          backgroundColor: 'transparent',
          borderStyle: 'solid',
          borderLeftWidth: 70,
          borderRightWidth: 70,
          borderBottomWidth: 45,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderColor: theme.colors.lightPurple,
        }}
      />
    );
  };
  return (
    <Container>
      <FastImage
        source={require('../assets/icons/life-insurance.gif')}
        style={{ height: 60, width: 60 }}
      />
      <Typography
        fontSize="12px"
        fontWeight="Medium"
        marginTop="10px"
        marginBottom="5px">
        {name}
      </Typography>
      {focused && <Triangle />}
    </Container>
  );
};
