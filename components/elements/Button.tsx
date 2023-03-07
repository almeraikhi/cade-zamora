import React from 'react';
import styled from 'styled-components';
import { Typography } from './Typography';

const DefaultContainer = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: 10px 18px;
  cursor: pointer;
  align-items: center;
`;

const WireButtonContainer = styled(DefaultContainer)`
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
`;

export type ButtonProps = {
  children: string;
  variant?: 'default' | 'wire';
};

/**
 * Function to get the different style of button based on variant
 * @param variant
 * @returns
 */
const getContainer = (variant: string) => {
  switch (variant) {
    case 'wire':
      return WireButtonContainer;
    default:
      return DefaultContainer;
  }
};

export const Button = ({ children, variant = 'default' }: ButtonProps) => {
  const Container = getContainer(variant);
  return (
    <Container>
      <Typography>{children}</Typography>
    </Container>
  );
};
