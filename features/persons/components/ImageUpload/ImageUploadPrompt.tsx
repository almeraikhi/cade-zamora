import React from 'react';
import { UploadPrompt } from './Elements';
import { Button } from '@/components/elements';

export const ImageUploadPrompt = () => {
  return (
    <UploadPrompt>
      <Button variant='wire'>Browse</Button>
    </UploadPrompt>
  );
};
