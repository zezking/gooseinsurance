import { Button, Text, TextInput, View } from 'react-native';

const Login = (): JSX.Element => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ENTER YOUR E-MAIL</Text>
      <TextInput placeholder="email" />
      <Text>PASSWORD</Text>
      <TextInput placeholder="password" />
    </View>
  );
};

export default Login;
