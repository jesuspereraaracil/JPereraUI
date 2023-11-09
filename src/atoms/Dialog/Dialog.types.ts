import {PropsWithChildren} from 'react';

export interface DialogProps extends PropsWithChildren {
  open: boolean;
}

export type DialogStyledProps = Omit<DialogProps, 'open'>
