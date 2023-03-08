import React from 'react';
import { Modal } from '@/components/composite/Modal';
import { Typography } from '@/components/elements';
import { CreatePersonForm } from './CreatePersonForm';
import { createPersonStore } from '../../stores/createPersonStore';

export const CreatePersonModal = () => {
  const isOpen = createPersonStore.use.isOpen();
  const setIsOpen = createPersonStore.set.isOpen;
  return (
    <Modal
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <Typography variant='h6'>Create New Person</Typography>
      <CreatePersonForm />
    </Modal>
  );
};
