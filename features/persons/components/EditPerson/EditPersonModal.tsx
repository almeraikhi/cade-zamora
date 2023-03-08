import React, { useEffect } from 'react';
import { Modal } from '@/components/composite/Modal';
import { Typography } from '@/components/elements';
import { editPersonStore } from '../../stores/editPersonStore';
import { EditPersonForm } from './EditPersonForm';
import { trpc } from '@/utils/trpc';
import { Island_Moments } from 'next/font/google';

export const EditPersonModal = () => {
  const isOpen = editPersonStore.use.isOpen();
  const setIsOpen = editPersonStore.set.isOpen;
  const personId = editPersonStore.use.personId();
  const { data, isLoading } = trpc.person.getOne.useQuery(
    { id: personId as string },
    { enabled: isOpen && !!personId }
  );

  if (isLoading) {
    return null;
  }

  if (!data) {
    return null;
  }

  return (
    <Modal
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <Typography variant='h6'>Edit Person</Typography>
      <EditPersonForm initialData={data} />
    </Modal>
  );
};
