import React from 'react';
import { Backdrop, Paper } from './Elements';
import { ModalProps } from './types';

export const Modal = ({ children, open, styles, onClose }: ModalProps) => {
  return (
    <Backdrop
      style={styles?.backdrop}
      open={open}
      onMouseDown={(event) => {
        // this is to ensure that the modal will only close if we click on the backdrop, not on the modal itself
        if (event.target === event.currentTarget) {
          onClose?.();
        }
      }}
    >
      <Paper style={styles?.modal}>{children}</Paper>
    </Backdrop>
  );
};
