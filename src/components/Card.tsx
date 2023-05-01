import { ViewProps } from 'react-native/types';
import styled from 'styled-components/native';

interface WrapperProps extends ViewProps {
  height: string;
  width: string;
  position?: string;
  justify?: string;
  alignItems?: string;
}

const Wrapper = styled.View<WrapperProps>`
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};
  position: ${props => props.position || 'static'};
  top: 35%;
  margin-left: auto;
  margin-right: auto;
  shadow-color: '#000';
  shadow-offset: 0px 6px;
  shadow-opacity: 0.39;
  shadow-radius: 8.3px;
  elevation: 13;
  border-radius: 25px;
  background-color: ${props => props.theme.colors.white};
  z-index: 99;
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.alignItems || 'stretch'};
`;

export const Card = ({ children, ...rest }: WrapperProps) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
