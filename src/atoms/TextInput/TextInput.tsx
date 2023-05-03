import { TextInputStyled } from './TextInput.styled';
import { TextInputProps } from './TextInput.types';

export const TextInput = ({
  extraClassnames,
  ...props
}: TextInputProps): JSX.Element => (
  <TextInputStyled {...props} className={extraClassnames} />
);
