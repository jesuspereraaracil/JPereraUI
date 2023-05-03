import { ButtonProps } from './Button.types';
import { ButtonStyled } from './Button.styled';

export const Button = (props: ButtonProps): JSX.Element => {
  const { text } = props;
  return <ButtonStyled {...props}>{text}</ButtonStyled>;
};
