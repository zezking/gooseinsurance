import styled from 'styled-components/native';
import { Container } from './Container';
import { Linking } from 'react-native';
import { TERMS_OF_SERVICES_URL, PRIVACY_POLICY_URL } from '../constants';
import { Text } from '../components/Text';
interface TextProp {
  fontSize: string;
  fontFamily: string;
}

const FooterText = styled(Text)<TextProp>`
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily};
  margin-bottom: 8px;
`;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
`;
const Footer = (): JSX.Element => {
  return (
    <Container alignItems="center" justify="center">
      <Wrapper>
        <FooterText
          fontSize="11px"
          fontFamily="GraphikTrial-Medium"
          onPress={() => Linking.openURL(TERMS_OF_SERVICES_URL)}>
          Terms of Service
        </FooterText>
        <FooterText fontSize="11px" fontFamily="GraphikTrial-SemiBold">
          &nbsp; | &nbsp;
        </FooterText>
        <FooterText
          fontSize="11px"
          fontFamily="GraphikTrial-Medium"
          onPress={() => Linking.openURL(PRIVACY_POLICY_URL)}>
          Privacy Policy
        </FooterText>
      </Wrapper>
      <FooterText fontSize="8px" fontFamily="Graphik-Normal">
        Insurance is sold by Goose Insurance and underwritten by various
        companies
      </FooterText>
    </Container>
  );
};

export default Footer;
