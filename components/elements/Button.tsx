import React from 'react';
import styled from 'styled-components';
import { Typography } from './Typography';

const DefaultContainer = styled.div`
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

const WireButtonContainer = styled(DefaultContainer)`
  background-color: transparent;
  color: rgba(0, 0, 0, 0.87);
  border: 1px solid rgba(0, 0, 0, 0.87);
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
