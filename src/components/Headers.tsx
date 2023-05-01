import { Container } from './Container';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { theme } from '../theme';

export const AuthHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      height="44.5%"
      bgColor={theme.colors.deepPurple}
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 8,
        elevation: 6,
      }}>
      {children}
    </Container>
  );
};

export const LoginHeader = () => {
  const navigation = useNavigation();
  return (
    <Container flexDirection="row" height="15%" marginTop="20px">
      <Container flexDirection="row" width="33%">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FastImage
            style={{
              height: 24,
              width: 24,
              marginLeft: 20,
            }}
            source={require('../assets/icons/back-arrow.webp')}
          />
        </TouchableOpacity>
      </Container>
      <Container flexDirection="row" width="33%" justify="center">
        <FastImage
          style={{
            height: 40,
            width: 40,
          }}
          source={require('../assets/logos/goose-logo.webp')}
        />
      </Container>
    </Container>
  );
};

export const HomeHeader = () => {
  return (
    <Container
      flexDirection="row"
      height="10%"
      marginTop="40px"
      justify="space-between"
      paddingHorizontal="20px"
      style={{ paddingHorizontal: 20 }}>
      <Container flexDirection="row" width="50%" height="50%">
        <FastImage
          source={require('../assets/logos/goose-logo-lg-black.png')}
          style={{ height: 42, width: 123 }}
        />
      </Container>
      <Container
        flexDirection="row"
        width="50%"
        height="50%"
        justify="flex-end">
        <TouchableOpacity>
          <FastImage
            source={require('../assets/icons/rewards.webp')}
            style={{ height: 25, width: 25 }}
          />
        </TouchableOpacity>
      </Container>
    </Container>
  );
};
