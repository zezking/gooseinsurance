import { ViewProps } from 'react-native/types';
import styled from 'styled-components/native';

interface WrapperProps extends ViewProps {
  flexDirection?: string;
  justify?: string;
  alignItems?: string;
  marginTop?: string;
  marginBottom?: string;
  bgColor?: string;
  flexGrow?: number;
  flexShrink?: number;
  height?: string;
  width?: string;
  flexWrap?: string;
  paddingHorizontal?: string;
  paddingTop?: string;
  paddingBottom?: string;
  padding?: string;
}

const Wrapper = styled.View<WrapperProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  display: flex;
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.alignItems || 'center'};
  margin-top: ${props => props.marginTop || 0};
  margin-bottom: ${props => props.marginBottom || 0};
  background-color: ${props => props.bgColor || 'none'};
  flex-grow: ${props => props.flexGrow || 0};
  flex-shrink: ${props => props.flexShrink || 0};
  padding-top: ${props => props.paddingTop || 0};
  padding-horizontal: ${props => props.paddingHorizontal || 0};
  padding-bottom: ${props => props.paddingBottom || 0};
`;

export const Container = ({ children, ...rest }: WrapperProps) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
