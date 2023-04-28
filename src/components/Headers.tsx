import styled from 'styled-components/native';

interface AuthHeaderProps {
  children: React.ReactNode;
}
const Wrapper = styled.View`
  width: 100%;
  height: 44.5%;
  background-color: ${props => props.theme.colors.deepPurple};
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.8;
  shadow-radius: 8px;
  elevation: 6;
`;

export const AuthHeader = ({ children }: AuthHeaderProps) => {
  return <Wrapper>{children}</Wrapper>;
};
