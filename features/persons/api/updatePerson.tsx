import { trpc } from '@/utils/trpc';
import { editPersonStore } from '../stores/editPersonStore';

export const useUpdatePerson = () => {
  const context = trpc.useContext();
  const setIsOpen = editPersonStore.set.isOpen;
  return trpc.person.update.useMutation({
    onSuccess: () => {
      context.person.getAll.invalidate();
      setIsOpen(false);
    },
  });
};
