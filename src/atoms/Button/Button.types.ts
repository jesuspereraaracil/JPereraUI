import { MouseEventHandler } from 'react';

export interface ButtonProps {
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
  flow: boolean;
}
