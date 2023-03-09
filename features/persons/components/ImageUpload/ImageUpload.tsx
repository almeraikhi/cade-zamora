import { Button } from '@/components/elements';
import { getPersonImage } from '@/utils/getPeronImage';
import React, { useEffect, useRef, useState } from 'react';
import { ImagePreviewArea, UploadPrompt } from './Elements';
import { imageUploadStore } from './imageUploadStore';

export type ImageUploadProps = {
  name: string;
  imageUrl: string | null;
  color: string;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ImageUpload = (props: ImageUploadProps) => {
  // const [tmpImage, setTmpImage] = useState<string | undefined>();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('image url', props.imageUrl);
  }, [props.imageUrl]);

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <ImagePreviewArea>
      {getPersonImage(props)}
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
        onChange={props.onInputChange}
      />
    </ImagePreviewArea>
  );
};
