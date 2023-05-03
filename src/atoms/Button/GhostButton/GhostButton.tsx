import { ButtonProps } from '../Button.types';
import { GhostButtonStyled } from './GhostButton.styled';

export const GhostButton = (props: ButtonProps) => {
  const { text } = props;

  return <GhostButtonStyled {...props}>{text}</GhostButtonStyled>;
};
