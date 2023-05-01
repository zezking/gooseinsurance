import { Text, View, Button } from 'react-native';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { clearUserSession } from '../redux/authSlice';
import { showMessage } from 'react-native-flash-message';
import { Loader } from '../components/Loader';

const Account = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(state => state.status);
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
  if (authStatus === 'loading') {
    return <Loader />;
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Account</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Account;
