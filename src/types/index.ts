export type RootStackParamList = {
  Home: undefined;
  Auth: undefined;
  Login: undefined;
  Account: undefined;
};

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
  status: string;
  isAuthenticated: boolean;
  user: UserData | null;
};

export type AuthResponse = {
  data: UserData | { error: string };
};

export type FormValues = {
  email: string;
  password: string;
};