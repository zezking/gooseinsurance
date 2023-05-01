import { TouchableOpacity } from 'react-native';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { clearUserSession } from '../redux/authSlice';
import { showMessage } from 'react-native-flash-message';
import { Container } from '../components/Container';
import { theme } from '../theme';
import { Typography } from '../components/Typography';
import { UserData } from '../types';
import FastImage from 'react-native-fast-image';

const Account = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const authRes = useAppSelector(state => state.authRes as UserData);
  const userBirthDate = new Date(authRes.user.birthday);
  const formattedBirthDate = `${userBirthDate.toLocaleString('en-us', {
    month: 'short',
  })} ${userBirthDate.getUTCDate()}, ${userBirthDate.getFullYear()}`;
  const [street, room, city, provinceZipCode] = authRes.user.address.split(',');

  const handleLogout = async () => {
    try {
      await dispatch(clearUserSession()).unwrap();
    } catch (err: any) {
      showMessage({
        message: err.message,
        backgroundColor: 'red',
        type: 'danger',
      });
    }
  };

  return (
    <Container bgColor={theme.colors.backgroundGray}>
      <Container
        height="31%"
        bgColor={theme.colors.white}
        alignItems="flex-start"
        paddingHorizontal="20px"
        paddingTop="93px"
        paddingBottom="45px"
        marginBottom="10px">
        <Typography
          fontSize="25px"
          fontWeight="Bold"
          letterSpacing="-1px"
          marginBottom="20px">
          {authRes.user.name}
        </Typography>
        <Container
          flexDirection="row"
          height="20px"
          alignItems="center"
          marginBottom="15px">
          <FastImage
            source={require('../assets/icons/profile-cake.webp')}
            style={{ height: 19, width: 19, marginRight: 13 }}
          />
          <Typography fontSize="14px" style={{ marginTop: 5 }}>
            {formattedBirthDate}
          </Typography>
        </Container>
        <Container flexDirection="row" height="55px" alignItems="flex-start">
          <FastImage
            source={require('../assets/icons/profile-home.webp')}
            style={{ height: 19, width: 19, marginRight: 13 }}
          />
          <Container alignItems="flex-start" paddingTop="5px">
            <Typography fontSize="14px">{street + ',' + room}</Typography>
            <Typography fontSize="14px">{city.trim()}</Typography>
            <Typography fontSize="14px">{provinceZipCode.trim()}</Typography>
          </Container>
        </Container>
        <TouchableOpacity
          style={{ position: 'absolute', right: 20, bottom: 35 }}>
          <FastImage
            source={require('../assets/icons/pink-right-arrow-ghost.webp')}
            style={{
              height: 30,
              width: 30,
            }}
          />
        </TouchableOpacity>
      </Container>
      <Container
        bgColor={theme.colors.white}
        height="18%"
        paddingHorizontal="20px"
        flexDirection="row"
        alignItems="flex-start"
        paddingTop="25px"
        justify="center">
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            width: '100%',
            height: 65,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
            borderRadius: 14,
            backgroundColor: theme.colors.primary,
          }}>
          <Typography
            fontSize="18px"
            fontWeight="Medium"
            color={theme.colors.white}>
            Logout
          </Typography>
        </TouchableOpacity>
      </Container>
    </Container>
  );
};

export default Account;
