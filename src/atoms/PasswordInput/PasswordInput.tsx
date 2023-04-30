import { TextInputProps } from '../TextInput/TextInput.types';
import { TextInputStyled } from '../TextInput/TextInput.styled';

export const PasswordInput = ({
    extraClassnames,
    ...props
}: TextInputProps) => (
    <TextInputStyled {...props} className={extraClassnames} type="password" />
);
