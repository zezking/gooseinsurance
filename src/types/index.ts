import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Auth: undefined;
  Login: undefined;
  Account: undefined;
};

export type LoginScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;

export type AuthScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Auth'
>;

export type UserData = {
  user: {
    name: string;
    birthday: Date;
    address: string;
  };
  products: [
    {
      id: number;
      title: string;
    },
  ];
};

export type AuthState = {
  status: 'authenticated' | 'unauthenticated' | 'loading';
  isAuthenticated: boolean;
  user: UserData | null;
};

export type AuthResponse = {
  data: UserData | { error: string };
};

export type FormValues = {
  email: string | undefined;
  password: string | undefined;
};
