import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthScreenNavigationProp, RootStackParamList } from '../types';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import Footer from '../components/Footer';
import { Card } from '../components/Card';
import { Container } from '../components/Container';
import { AuthHeader } from '../components/Headers';
import { StatusBar } from 'react-native';
import { Typography } from '../components/Typography';

const logoStyle = { width: 215, height: 70 };
const flagIconStyle = {
  height: '100%',
  width: '100%',
};

const FlagButton = styled.TouchableOpacity`
  height: 20px;
  width: 27px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  align-self: flex-end;
  shadow-color: '#000';
  shadow-offset: 0px 0px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 10;
`;

interface AuthButtonProps {
  borderBottomWidth?: string;
}

const AuthButton = styled.TouchableOpacity<AuthButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-bottom-width: ${props => props.borderBottomWidth || 0};
  border-color: ${props => props.theme.colors.border};
`;
const buttonIconStyle = {
  width: 39,
  height: 39,
  marginRight: 15,
  marginLeft: 10,
};

const Auth = ({ navigation }: AuthScreenNavigationProp): JSX.Element => {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#AD3272" />
      <AuthHeader>
        <Container alignItems="center" marginTop="45px">
          <FlagButton>
            <FastImage
              style={flagIconStyle}
              source={require('../assets/icons/flag-ca.webp')}
            />
          </FlagButton>
          <FastImage
            style={logoStyle}
            source={require('../assets/logos/goose-logo-lg-white.webp')}
          />
          <Typography
            fontSize="13px"
            fontWeight="Semibold"
            marginTop="26px"
            marginBottom="50px"
            letterSpacing="2px"
            color="#F0F0F0">
            THE INSURANCE SUPER-APP
          </Typography>
        </Container>
      </AuthHeader>
      <Card height="312px" width="310px" position="absolute">
        <AuthButton borderBottomWidth="1px">
          <FastImage
            style={buttonIconStyle}
            source={require('../assets/icons/facebookv2.webp')}
          />
          <Typography fontSize="14px" fontWeight="Medium">
            Continue with Facebook
          </Typography>
        </AuthButton>
        <AuthButton borderBottomWidth="1px">
          <FastImage
            style={buttonIconStyle}
            source={require('../assets/icons/gplus.webp')}
          />
          <Typography fontSize="14px" fontWeight="Medium">
            Continue with Google
          </Typography>
        </AuthButton>
        <AuthButton borderBottomWidth="1px">
          <FastImage
            style={buttonIconStyle}
            source={require('../assets/icons/apple.webp')}
          />
          <Typography fontSize="14px" fontWeight="Medium">
            Continue with Apple
          </Typography>
        </AuthButton>
        <AuthButton onPress={() => navigation.navigate('Login')}>
          <FastImage
            style={{
              ...buttonIconStyle,
              width: 30,
              height: 30,
              marginLeft: 15,
              marginRight: 20,
            }}
            source={require('../assets/icons/mailv2.webp')}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Typography fontSize="14px" fontWeight="Medium">
            Login with Email
          </Typography>
        </AuthButton>
      </Card>
      <Footer />
    </Container>
  );
};

export default Auth;
