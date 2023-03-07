import { getPersonImage } from '@/utils/getPeronImage';
import React from 'react';
import { ImagePreviewArea } from './Elements';
import { ImageUploadPrompt } from './ImageUploadPrompt';

export type ImageUploadProps = {
  name: string;
  imageUrl: string;
};

export const ImageUpload = (props: ImageUploadProps) => {
  return (
    <ImagePreviewArea>
      {getPersonImage(props)}
      <ImageUploadPrompt />
    </ImagePreviewArea>
  );
};
