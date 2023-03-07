import React from 'react';
import { Backdrop, Paper } from './Elements';
import { ModalProps } from './types';

export const Modal = ({ children }: ModalProps) => {
  return (
    <Backdrop>
      <Paper>{children}</Paper>
    </Backdrop>
  );
};
