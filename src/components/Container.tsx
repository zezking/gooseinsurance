import styled from 'styled-components/native';

interface WrapperProps {
  flexDirection?: string;
  justify?: string;
  alignItems?: string;
  marginTop?: string;
  marginBottom?: string;
}
interface ContainerProps extends WrapperProps {
  children: React.ReactNode;
}
const Wrapper = styled.View<WrapperProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.alignItems || 'center'};
  margin-top: ${props => props.marginTop || 0};
  margin-bottom: ${props => props.marginBottom || 0};
`;

export const Container = ({
  children,
  flexDirection,
  justify,
  alignItems,
  marginTop,
}: ContainerProps) => {
  return (
    <Wrapper
      flexDirection={flexDirection}
      justify={justify}
      alignItems={alignItems}
      marginTop={marginTop}>
      {children}
    </Wrapper>
  );
};
