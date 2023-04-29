import styled from 'styled-components/native';
import { Container } from './Container';
import { Linking } from 'react-native';
import { TERMS_OF_SERVICES_URL, PRIVACY_POLICY_URL } from '../constants';
import { Typography } from './Typography';

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
`;
const Footer = (): JSX.Element => {
  return (
    <Container alignItems="center" justify="center">
      <Wrapper>
        <Typography
          fontSize="11px"
          fontWeight="SemiBold"
          marginBottom="8px"
          onPress={() => Linking.openURL(TERMS_OF_SERVICES_URL)}>
          Terms of Service
        </Typography>
        <Typography fontSize="11px" fontWeight="SemiBold">
          &nbsp; | &nbsp;
        </Typography>
        <Typography
          fontSize="11px"
          fontWeight="SemiBold"
          marginBottom="8px"
          onPress={() => Linking.openURL(PRIVACY_POLICY_URL)}>
          Privacy Policy
        </Typography>
      </Wrapper>
      <Typography fontSize="8px" marginBottom="8px" fontWeight="Regular">
        Insurance is sold by Goose Insurance and underwritten by various
        companies
      </Typography>
    </Container>
  );
};

export default Footer;
