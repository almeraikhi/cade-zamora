import React from 'react';
import { Container } from './Elements';

export type DataLabelProps = {
  label: string;
  children: string;
};

export const DataLabel = ({ label, children }: DataLabelProps) => {
  return (
    <Container>
      <div style={{ fontSize: 14, fontWeight: 500, color: 'rgba(0,0,0, 0.6)' }}>
        {label}
      </div>
      <div style={{ fontSize: 20 }}>{children}</div>
    </Container>
  );
};
