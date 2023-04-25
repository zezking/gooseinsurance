import { Button, Text, TextInput, View } from 'react-native';
import { useAppDispatch } from '../redux/hooks';
import { authenticateUser } from '../redux/authSlice';
import {
  Control,
  SubmitHandler,
  useController,
  useForm,
} from 'react-hook-form';
import { FormValues } from '../types';

const Login = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { control, handleSubmit, reset } = useForm<FormValues>();

  const Input = ({
    name,
    control,
  }: {
    name: 'email' | 'password';
    control: Control<FormValues>;
  }) => {
    const { field } = useController({
      control,
      defaultValue: '',
      name,
    });
    return (
      <TextInput
        value={field.value.replace(/ /g, '')}
        onChangeText={field.onChange}
        autoCorrect={false}
        keyboardType={name === 'email' ? 'email-address' : 'default'}
        autoCapitalize="none"
        autoComplete={name === 'email' ? 'email' : 'password'}
        secureTextEntry={name === 'password' ? true : false}
      />
    );
  };

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    await dispatch(authenticateUser(data)).unwrap();
    reset();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ENTER YOUR E-MAIL</Text>
      <Input name="email" control={control} />
      <Text>PASSWORD</Text>
      <Input name="password" control={control} />
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default Login;
