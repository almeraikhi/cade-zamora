import React from 'react';
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';

export type TextFieldProps = MuiTextFieldProps & {
  errorMessage?: string;
};
export const TextField = ({ errorMessage, ...props }: TextFieldProps) => (
  <MuiTextField
    {...props}
    error={Boolean(errorMessage)}
    helperText={errorMessage}
    variant='standard'
  />
);
