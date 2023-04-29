import {
  Button,
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import { useAppDispatch } from '../redux/hooks';
import { authenticateUser } from '../redux/authSlice';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '../types';
import { Container } from '../components/Container';
import { Typography } from '../components/Typography';
import { theme } from '../theme';
import React, { useRef, useState } from 'react';
import { LoginHeader } from '../components/Headers';
import styled from 'styled-components/native';

const TextInput = styled.TextInput<{ inputFocused?: boolean }>`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${props =>
    props.inputFocused
      ? props.theme.colors.primary
      : props.theme.colors.border};
  padding-bottom: 8px;
`;

const DismissKeyboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

const Login = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { control, handleSubmit, reset } = useForm<FormValues>();
  const [emailInputFocused, setEmailInputFocused] = useState<boolean>(false);
  const [passwordInputFocused, setPasswordInputFocused] =
    useState<boolean>(false);

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    await dispatch(authenticateUser(data)).unwrap();
    reset();
  };

  return (
    <DismissKeyboard>
      <Container bgColor={theme.colors.white} alignItems="flex-start">
        <StatusBar barStyle={'default'} />
        <LoginHeader />

        <Container
          alignItems="flex-start"
          paddingHorizontal="20px"
          height="75%">
          <Typography
            fontSize="26px"
            fontWeight="SemiBold"
            color="black"
            marginBottom="40px">
            Login
          </Typography>
          <Container
            width="100%"
            height="55px"
            alignItems="flex-start"
            marginBottom="25px">
            <Typography
              fontSize="12px"
              color={theme.colors.gray}
              fontWeight="Medium"
              letterSpacing="1px"
              marginBottom="16px">
              ENTER YOUR E-MAIL
            </Typography>

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={() => setEmailInputFocused(!emailInputFocused)}
                  autoCapitalize="none"
                  onChangeText={onChange}
                  autoCorrect={false}
                  keyboardType="email-address"
                  autoComplete="email"
                  value={value}
                  inputFocused={emailInputFocused}
                />
              )}
              name="email"
            />
          </Container>

          <Container width="100%" height="55px" alignItems="flex-start">
            <Typography
              fontSize="12px"
              letterSpacing="1px"
              fontWeight="Medium"
              marginBottom="16px"
              color={theme.colors.gray}>
              PASSWORD
            </Typography>

            <Controller
              control={control}
              rules={{
                minLength: 8,
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={() => setPasswordInputFocused(!passwordInputFocused)}
                  autoCapitalize="none"
                  onChangeText={onChange}
                  autoCorrect={false}
                  autoComplete="password"
                  value={value}
                  inputFocused={passwordInputFocused}
                  secureTextEntry={true}
                />
              )}
              name="password"
            />
          </Container>
        </Container>

        <Container>
          <Button title="Login" onPress={handleSubmit(onSubmit)} />
        </Container>
      </Container>
    </DismissKeyboard>
  );
};

export default Login;
