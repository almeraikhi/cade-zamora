import { createStore } from '@udecode/zustood';

export const imageUploadStore = createStore('imageUploadStore')({
  image: null as File | null,
});
