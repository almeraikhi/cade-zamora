import { alterConfirmationStore } from '@/components/composite/AlertConfirmationModal/alertConfirmationStore';
import { PersonGetOneOutput } from '@/server/client';
import { useDeletePerson } from '../api/deletePerson';

export const useOpenDeleteConfirmationModal = () => {
  const deletePerson = useDeletePerson();

  return (person: PersonGetOneOutput) => {
    alterConfirmationStore.set.open(
      'Are you sure?',
      `Do you really want to remove the person "${person?.name}"? This action cannot be undone.`,
      async () => {
        if (!person) return;
        deletePerson.mutate({ id: person.id });
      }
    );
  };
};
