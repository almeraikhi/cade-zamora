import React from 'react';

export type FormProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLFormElement>;

export const Form = (props: FormProps) => {
  return (
    <form
      {...props}
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit?.(event);
      }}
    />
  );
};
