import { TextProps } from 'react-native/types';
import styled from 'styled-components/native';
import { theme } from '../theme';

interface WrapperProps extends TextProps {
  fontSize: string;
  fontWeight?:
    | 'Bold'
    | 'Extralight'
    | 'Light'
    | 'Medium'
    | 'Regular'
    | 'Semibold'
    | 'Thin';
  letterSpacing?: string;
  marginTop?: string;
  marginBottom?: string;
  color?: string;
}

const Wrapper = styled.Text<WrapperProps>`
  font-size: 13px;
  font-family: GraphikTrial-${props => props.fontWeight || 'Regular'};
  font-size: ${props => props.fontSize || '10px'};
  letter-spacing: ${props => props.letterSpacing || 0};
  color: ${props => props.color || theme.colors.text};
  margin-top: ${props => props.marginTop || 0};
  margin-bottom: ${props => props.marginBottom || 0};
`;

export const Typography = ({
  children,

  ...rest
}: WrapperProps) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
