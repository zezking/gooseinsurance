import { Text, View, Button } from 'react-native';
import { useAppDispatch } from '../redux/hooks';
import { logout } from '../redux/authSlice';

const Account = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Account</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Account;
