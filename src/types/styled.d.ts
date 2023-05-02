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
      border: string;
      green: string;
      red: string;
      lightPurple: string;
      text: string;
      textSecondary: string;
      textFooter: string;
      textCard: string;
      background: string;
      backgroundGray: string;
    };
  }
}
