import React from 'react';
import styled from 'styled-components';
import { Typography } from './Typography';

const Container = styled.div`
  display: inline-block;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.87);
  color: #fff;
  padding: 10px 18px;
  cursor: pointer;
  max-height: 30px;
  min-height: 30px;
  display: flex;
  align-items: center;
`;

export type ButtonProps = {
  children: string;
};

export const Button = ({ children }: ButtonProps) => {
  return (
    <Container>
      <Typography>{children}</Typography>
    </Container>
  );
};
