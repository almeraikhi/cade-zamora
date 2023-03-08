import React from 'react';
import { Backdrop, Paper } from './Elements';
import { ModalProps } from './types';

export const Modal = ({ children, open, onClose }: ModalProps) => {
  return (
    <Backdrop
      open={open}
      onMouseDown={(event) => {
        // this is to ensure that the modal will only close if we click on the backdrop, not on the modal itself
        if (event.target === event.currentTarget) {
          onClose?.();
        }
      }}
    >
      <Paper>{children}</Paper>
    </Backdrop>
  );
};
