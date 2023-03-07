import React from 'react';
import { Container } from './Elements';
import { Button } from '@/components/elements';

export const Header = () => {
  return (
    <Container>
      {/* TODO add the night mode switcher later :) */}
      <div></div>
      <Button>Create New</Button>
    </Container>
  );
};
