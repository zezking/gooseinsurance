import styled from 'styled-components/native';
import { Container } from './Container';
import { Linking } from 'react-native';
import { TERMS_OF_SERVICES_URL, PRIVACY_POLICY_URL } from '../constants';
interface TextProp {
  fontSize: string;
  fontWeight: string;
}

const Text = styled.Text<TextProp>`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
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
        <Text
          fontSize="11px"
          fontWeight="600"
          onPress={() => Linking.openURL(TERMS_OF_SERVICES_URL)}>
          Terms of Service
        </Text>
        <Text fontSize="11px" fontWeight="600">
          &nbsp; | &nbsp;
        </Text>
        <Text
          fontSize="11px"
          fontWeight="600"
          onPress={() => Linking.openURL(PRIVACY_POLICY_URL)}>
          Privacy Policy
        </Text>
      </Wrapper>
      <Text fontSize="8px" fontWeight="400">
        Insurance is sold by Goose Insurance and underwritten by various
        companies
      </Text>
    </Container>
  );
};

export default Footer;
