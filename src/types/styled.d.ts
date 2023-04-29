import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      gray: string;
      black: string;
      white: string;
      deepPurple: string;
      offWhite: string;
      text: string;
      border: string;
      green: string;
      red: string;
      lightPurple: string;
    };
  }
}
