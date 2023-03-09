import { trpc } from '@/utils/trpc';
import { editPersonStore } from '../stores/editPersonStore';

export const useDeletePerson = () => {
  const context = trpc.useContext();
  const setIsOpen = editPersonStore.set.isOpen;
  return trpc.person.delete.useMutation({
    onSuccess: () => {
      context.person.getAll.invalidate();
      setIsOpen(false);
    },
  });
};
