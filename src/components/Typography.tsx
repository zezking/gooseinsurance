import styled from 'styled-components/native';

interface TextProps extends Text {
  fontSize: string;
  fontWeight?:
    | 'Bold'
    | 'Extralight'
    | 'Light'
    | 'Medium'
    | 'Regular'
    | 'SemiBold'
    | 'Thin';
  letterSpacing?: string;
  marginTop?: string;
  marginBottom?: string;
  color?: string;
  onPress?(): void;
}
interface TypographyProps extends TextProps {
  children: React.ReactNode;
}

const Text = styled.Text<TextProps>`
  font-size: 13px;
  font-family: GraphikTrial-${props => props.fontWeight || 'Regular'};
  font-size: ${props => props.fontSize || '10px'};
  letter-spacing: ${props => props.letterSpacing || 0};
  color: ${props => props.color || '#14162C'};
  margin-top: ${props => props.marginTop || 0};
  margin-bottom: ${props => props.marginBottom || 0};
`;


export const Typography = ({
  fontSize,
  fontWeight,
  letterSpacing,
  marginTop,
  marginBottom,
  color,
  children,
  onPress,
}: TypographyProps) => {
  return (
    <Text
      fontSize={fontSize}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      marginTop={marginTop}
      marginBottom={marginBottom}
      color={color}
      onPress={onPress}>
      {children}
    </Text>
  );
};