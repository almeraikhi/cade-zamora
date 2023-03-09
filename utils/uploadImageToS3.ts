import axios from 'axios';
import mime from 'mime-types';
import { generateUUIDv4 } from './generateUUIDv4';
import { getBaseUrl } from './getBaseUrl';

export const getFileOriginalExtension = (file: File) => {
  const extension = mime.extension(file.type);
  return extension;
};

export const uploadImageToS3 = async (file: File) => {
  const extension = getFileOriginalExtension(file);
  const name = `${generateUUIDv4()}.${extension}`;
  const imageUrl = `${process.env.NEXT_PUBLIC_MINIO_URL}/images/${name}`;
  const { data } = await axios.post<{ presignedUrl: string }>(
    `${getBaseUrl()}/api/presignedurl`,
    {
      name: name,
    }
  );
  await axios.put(data.presignedUrl, file);

  return imageUrl;
};
