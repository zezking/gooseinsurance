import styled from 'styled-components/native';

interface WrapperProps {
  height: string;
  width: string;
  position?: string;
}

interface CardProps extends WrapperProps {
  children: React.ReactNode;
}

const Wrapper = styled.View<WrapperProps>`
  height: ${props => props.height};
  width: ${props => props.width};
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
`;

export const Card = ({ children, height, width, position }: CardProps) => {
  return (
    <Wrapper height={height} width={width} position={position}>
      {children}
    </Wrapper>
  );
};
