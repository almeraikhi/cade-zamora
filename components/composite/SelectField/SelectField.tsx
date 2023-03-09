import { FormControl, InputLabel, Select, SelectProps } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import React from 'react';

export interface SelectFieldProps extends SelectProps {
  label?: string;
  errorMessage?: string;
}

export const SelectField = ({
  label,
  errorMessage,
  ...props
}: SelectFieldProps) => {
  return (
    <FormControl variant='standard'>
      <InputLabel>Gender</InputLabel>
      <Select {...props} error={Boolean(errorMessage)} variant='standard' />
      {Boolean(errorMessage) && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};
