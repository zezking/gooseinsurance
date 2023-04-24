import { Button, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type AuthScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Auth'
>;

const Auth = ({ navigation }: AuthScreenNavigationProp): JSX.Element => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>
      <Button
        onPress={() => navigation.navigate('Login')}
        title="Login with Email"></Button>
    </View>
  );
};

export default Auth;
