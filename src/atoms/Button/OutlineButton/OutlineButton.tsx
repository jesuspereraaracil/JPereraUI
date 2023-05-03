import { ButtonProps } from '../Button.types';
import { OutlineButtonStyled } from './OutlineButton.styled';

export const OutlineButton = (props: ButtonProps) => {
  const { text } = props;

  return <OutlineButtonStyled {...props}>{text}</OutlineButtonStyled>;
};
