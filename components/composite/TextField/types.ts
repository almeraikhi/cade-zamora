export type TextFieldProps = {
  label: string;
  required?: boolean;
  errorMessage?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
