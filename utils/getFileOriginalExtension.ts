import mime from 'mime-types';

export const getFileOriginalExtension = (file: Express.Multer.File) => {
  const mimeType = file.mimetype;
  const extension = mime.extension(mimeType);
  return extension;
};
