import FastImage from 'react-native-fast-image';
import { Container } from './Container';
import { Typography } from './Typography';
import { Platform, View } from 'react-native/';
import { theme } from '../theme';
import Svg, { Path, Polygon, Rect } from 'react-native-svg';
interface HomeTabBarLabelProps {
  focused: boolean;
  name: string;
}
export const HomeTabBarLabel = ({ focused, name }: HomeTabBarLabelProps) => {
  const Triangle = () => {
    return (
      <Svg height={16} width={60} viewBox="0 0 60 16">
        <Path d="M 30 0 L 0 16 L 60 16 Z" fill={theme.colors.lightPurple} />
      </Svg>
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
