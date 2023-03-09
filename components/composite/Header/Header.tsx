import React from 'react';
import { Container } from './Elements';
import { Button } from '@/components/elements';
import { createPersonStore } from '@/features/persons/stores/createPersonStore';
import { useTour } from '@reactour/tour';

export const Header = () => {
  const { setIsOpen } = useTour();
  const setIsCreateModalOpen = createPersonStore.set.isOpen;
  return (
    <Container>
      {/* TODO add the night mode switcher later :) */}
      <div></div>
      <Button
        id='second-step'
        onClick={() => {
          // setIsOpen(false);
          setIsCreateModalOpen(true);
        }}
      >
        Create New
      </Button>
    </Container>
  );
};
