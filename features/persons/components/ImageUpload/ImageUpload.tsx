import { Button } from '@/components/elements';
import { getPersonImage } from '@/utils/getPeronImage';
import React, { useEffect, useRef, useState } from 'react';
import { ImagePreviewArea, UploadPrompt } from './Elements';
import { imageUploadStore } from './imageUploadStore';

export type ImageUploadProps = {
  name: string;
  imageUrl?: string;
  color: string;
};

export const ImageUpload = (props: ImageUploadProps) => {
  const [tmpImage, setTmpImage] = useState<string | undefined>();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    // keep the file in the store for later use with the forms
    imageUploadStore.set.image(file);
    // create a url to display the image
    const fileLoaded = URL.createObjectURL(file);
    setTmpImage(fileLoaded);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <ImagePreviewArea>
      {getPersonImage({ ...props, imageUrl: tmpImage ?? props.imageUrl })}
      <UploadPrompt>
        <Button onClick={handleClick} variant='wire'>
          Browse
        </Button>
      </UploadPrompt>
      <input
        style={{ display: 'none' }}
        ref={inputRef as any}
        type='file'
        name='image'
        onChange={handleChange}
      />
    </ImagePreviewArea>
  );
};
