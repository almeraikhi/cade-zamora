import { Modal } from '@/components/composite/Modal';
import { Typography } from '@/components/elements';
import { useCreatePersonTour } from '@/features/tour/hooks/useCreatePersonTour';
import { createPersonStore } from '../../stores/createPersonStore';
import { CreatePersonForm } from './CreatePersonForm';

export const CreatePersonModal = () => {
  const isOpen = createPersonStore.use.isOpen();
  const setIsOpen = createPersonStore.set.isOpen;
  useCreatePersonTour({ isOpen });

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
