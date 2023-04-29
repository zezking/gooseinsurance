import styled from 'styled-components/native';
import { Container } from './Container';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

interface AuthHeaderProps {
  children: React.ReactNode;
}
const Wrapper = styled.View`
  width: 100%;
  height: 44.5%;
  background-color: ${props => props.theme.colors.deepPurple};
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.8;
  shadow-radius: 8px;
  elevation: 6;
`;

export const AuthHeader = ({ children }: AuthHeaderProps) => {
  return <Wrapper>{children}</Wrapper>;
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
