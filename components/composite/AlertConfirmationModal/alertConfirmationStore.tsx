import { createStore } from '@udecode/zustood';

export const alterConfirmationStore = createStore('alterConfirmationStore')({
  isOpen: false,
  title: '',
  message: '',
  onConfirm: async () => {},
}).extendActions((set, get) => ({
  open: (title: string, message: string, onConfirm: () => Promise<void>) => {
    set.isOpen(true);
    set.title(title);
    set.message(message);
    set.onConfirm(onConfirm);
  },
}));
