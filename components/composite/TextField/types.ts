export type TextFieldProps = {
  label: string;
  error?: boolean;
  errorMessage?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
