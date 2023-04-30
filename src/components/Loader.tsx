import { ActivityIndicator } from 'react-native';
import { Container } from './Container';
import { theme } from '../theme';
import { Typography } from './Typography';

export const Loader = () => {
  return (
    <Container
      height="100%"
      width="100%"
      justify="center"
      alignItems="center"
      bgColor={theme.colors.primary}>
      <ActivityIndicator size="large" color={theme.colors.white} />
      <Typography
        fontSize="18px"
        fontWeight="SemiBold"
        marginTop="20px"
        color={theme.colors.white}>
        Loading...
      </Typography>
    </Container>
  );
};
