import React, { useRef } from 'react';
import { Label, StyledInput, Underline } from './Elements';
import { TextFieldProps } from './types';

export const SelectField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, errorMessage, ...props }, ref) => {
    const tmpRef = useRef<React.DetailedHTMLProps<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    > | null>(null);

    return (
      <div style={{ boxSizing: 'border-box' }}>
        <Label>
          {label} {props.required && '*'}
        </Label>
        {/* <StyledInput ref={ref as any} {...props} type="" /> */}
        <div>{tmpRef.current?.value}</div>
        <select ref={tmpRef as any} value='this is my value'>
          test
        </select>
        <Underline />
        {errorMessage && <Label>{errorMessage}</Label>}
      </div>
    );
  }
);

SelectField.displayName = 'SelectField';
