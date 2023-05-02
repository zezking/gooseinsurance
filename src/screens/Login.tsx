import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { authenticateUser } from '../redux/authSlice';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '../types';
import { Container } from '../components/Container';
import { Typography } from '../components/Typography';
import { theme } from '../theme';
import React, { useState } from 'react';
import { LoginHeader } from '../components/Headers';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { showMessage } from 'react-native-flash-message';
import { Loader } from '../components/Loader';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const TextInput = styled.TextInput<{ inputFocused?: boolean }>`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${props =>
    props.inputFocused
      ? props.theme.colors.primary
      : props.theme.colors.border};
  padding-bottom: 8px;
  font-family: 'GraphikTrial-Medium';
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
  const authStatus = useAppSelector(state => state.status);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
  });

  const [emailInputFocused, setEmailInputFocused] = useState<boolean>(false);
  const [passwordInputFocused, setPasswordInputFocused] =
    useState<boolean>(false);

  if (authStatus === 'loading') {
    return <Loader />;
  }

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    try {
      await dispatch(authenticateUser(data)).unwrap();
    } catch (err: any) {
      showMessage({
        message: err.message,
        backgroundColor: 'red',
        type: 'danger',
      });
    }
  };

  return (
    <DismissKeyboard>
      <Container
        bgColor={theme.colors.white}
        alignItems="flex-start"
        height="100%"
        width="100%">
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={theme.colors.white}
        />
        <LoginHeader />
        <KeyboardAwareScrollView style={{ width: '100%', height: '100%' }}>
          <Container
            alignItems="flex-start"
            height="40%"
            paddingHorizontal="20px"
            width="100%">
            <Typography
              fontSize="26px"
              fontWeight="Bold"
              color={theme.colors.text}
              marginBottom="40px"
              style={{ lineHeight: 40 }}>
              Login
            </Typography>
            <Container
              width="100%"
              height="30%"
              alignItems="flex-start"
              marginBottom="55px">
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
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Invalid email format',
                  },
                }}
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { invalid, isTouched },
                }) => {
                  const handleBlur = () => {
                    setEmailInputFocused(!emailInputFocused);
                    onBlur();
                  };

                  return (
                    <>
                      <TextInput
                        onBlur={handleBlur}
                        autoCapitalize="none"
                        onChangeText={onChange}
                        autoCorrect={false}
                        keyboardType="email-address"
                        autoComplete="email"
                        value={value}
                        inputFocused={emailInputFocused}
                      />
                      {errors.email?.type === 'pattern' && (
                        <Icon
                          name="exclamationcircle"
                          color={theme.colors.red}
                          size={20}
                          style={{
                            position: 'absolute',
                            right: 0,
                            bottom: Platform.OS === 'android' ? -20 : -15,
                          }}
                        />
                      )}
                      {!invalid && isTouched && (
                        <Icon
                          name="checkcircle"
                          color={theme.colors.green}
                          size={20}
                          style={{
                            position: 'absolute',
                            right: 0,
                            bottom: Platform.OS === 'android' ? -20 : -15,
                          }}
                        />
                      )}
                    </>
                  );
                }}
                name="email"
              />
            </Container>

            <Container width="100%" height="30%" alignItems="flex-start">
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
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { invalid, isTouched },
                }) => {
                  const handleBlur = () => {
                    setPasswordInputFocused(!emailInputFocused);
                    onBlur();
                  };

                  return (
                    <>
                      <TextInput
                        onBlur={handleBlur}
                        autoCapitalize="none"
                        onChangeText={onChange}
                        autoCorrect={false}
                        autoComplete="password"
                        value={value}
                        inputFocused={passwordInputFocused}
                        secureTextEntry={true}
                      />

                      {errors.password?.type === 'minLength' && (
                        <Icon
                          name="exclamationcircle"
                          color={theme.colors.red}
                          size={20}
                          style={{
                            position: 'absolute',
                            right: 0,
                            bottom: Platform.OS === 'android' ? -20 : -15,
                          }}
                        />
                      )}

                      {!invalid && isTouched && (
                        <Icon
                          name="checkcircle"
                          color={theme.colors.green}
                          size={20}
                          style={{
                            position: 'absolute',
                            right: 0,
                            bottom: Platform.OS === 'android' ? -20 : -15,
                          }}
                        />
                      )}
                    </>
                  );
                }}
                name="password"
              />
            </Container>
          </Container>
        </KeyboardAwareScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'position' : undefined}
          style={{
            height: '10%',
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            disabled={!isValid}
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: `${
                isValid ? theme.colors.primary : theme.colors.lightPurple
              }`,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Typography
              fontSize="18px"
              fontWeight="Medium"
              color={theme.colors.white}>
              Login
            </Typography>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};

export default Login;
