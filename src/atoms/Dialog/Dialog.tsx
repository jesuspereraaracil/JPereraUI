import { JSX, useEffect, useRef } from 'react';
import { DialogStyled } from './Dialog.styled';
import { DialogProps } from './Dialog.types';

export const Dialog = ({ children, open }: DialogProps): JSX.Element => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  return <DialogStyled ref={dialogRef}>{children}</DialogStyled>;
};
