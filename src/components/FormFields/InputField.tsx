import { TextField } from '@material-ui/core';
import * as React from 'react';
import { InputHTMLAttributes } from 'react';
import { Control, FieldValues, useController, UseControllerProps } from 'react-hook-form';

interface Props<T> extends UseControllerProps<T> {
  [key: string]: any;
}

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
}

export function InputField<T extends FieldValues>({
  name,
  control,
  label,
  ...inputProps
}: Props<T>) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      fullWidth
      size="small"
      margin="normal"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      label={label}
      variant="outlined"
      inputRef={ref}
      error={invalid}
      helperText={error?.message}
      inputProps={inputProps}
    />
  );
}
