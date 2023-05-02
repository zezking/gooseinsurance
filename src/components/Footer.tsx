import styled from 'styled-components/native';
import { Container } from './Container';
import { Linking } from 'react-native';
import { TERMS_OF_SERVICES_URL, PRIVACY_POLICY_URL } from '../constants';
import { Typography } from './Typography';
import { theme } from '../theme';

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
          fontWeight="Semibold"
          marginBottom="8px"
          color={theme.colors.textFooter}
          onPress={() => Linking.openURL(TERMS_OF_SERVICES_URL)}>
          Terms of Service
        </Typography>
        <Typography
          fontSize="11px"
          fontWeight="Semibold"
          color={theme.colors.textFooter}>
          &nbsp; | &nbsp;
        </Typography>
        <Typography
          fontSize="11px"
          fontWeight="Semibold"
          marginBottom="8px"
          color={theme.colors.textFooter}
          onPress={() => Linking.openURL(PRIVACY_POLICY_URL)}>
          Privacy Policy
        </Typography>
      </Wrapper>
      <Typography
        fontSize="8px"
        marginBottom="8px"
        fontWeight="Regular"
        color={theme.colors.textFooter}>
        Insurance is sold by Goose Insurance and underwritten by various
        companies
      </Typography>
    </Container>
  );
};

export default Footer;
