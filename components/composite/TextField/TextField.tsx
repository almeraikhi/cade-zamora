import React from 'react';
import { Label, StyledInput, Underline } from './Elements';
import { TextFieldProps } from './types';

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, errorMessage, ...props }, ref) => {
    return (
      <div style={{ boxSizing: 'border-box' }}>
        <Label>
          {label} {props.required && '*'}
        </Label>
        <StyledInput ref={ref as any} {...props} />
        <Underline />
        {errorMessage && <Label>{errorMessage}</Label>}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
