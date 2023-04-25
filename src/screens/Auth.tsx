import { Button, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type AuthScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Auth'
>;

const Auth = ({ navigation }: AuthScreenNavigationProp): JSX.Element => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Continue with Facebook" />
      <Button title="Continue with Google" />
      <Button title="Continue with Apple" />
      <Button
        onPress={() => navigation.navigate('Login')}
        title="Login with Email"
      />
    </View>
  );
};

export default Auth;
