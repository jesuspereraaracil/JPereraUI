import { LabelProps } from './Label.types';
import { LabelStyled } from './Label.styled';

export const Label = ({ text }: LabelProps): JSX.Element => (
    <LabelStyled>{text}</LabelStyled>
);
