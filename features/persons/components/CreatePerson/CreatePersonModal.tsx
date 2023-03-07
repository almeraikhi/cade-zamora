import React from 'react';
import { Modal } from '@/components/composite/Modal';
import { Typography } from '@/components/elements';
import { CreatePersonForm } from './CreatePersonForm';

export const CreatePersonModal = () => {
  return (
    <Modal>
      <Typography variant='h6'>Create New Person</Typography>
      <CreatePersonForm />
    </Modal>
  );
};
