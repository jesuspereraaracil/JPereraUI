import { MouseEventHandler } from 'react';

// normal, danger, warning, disabled
// outline normal, danger, warning, disabled
// ghost normal, danger, warning, disabled

export enum ButtonType {
  PRIMARY,
  SECONDARY,
  WARNING,
  DANGER,
}
export interface ButtonProps {
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
  type: ButtonType;
}
