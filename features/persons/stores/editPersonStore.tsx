import { createStore } from '@udecode/zustood';

export const editPersonStore = createStore('editPersonStore')({
  isOpen: false,
  personId: undefined as string | undefined,
}).extendActions((set, get) => ({
  openModal: (personId: string) => {
    set.isOpen(true);
    set.personId(personId);
  },
}));
