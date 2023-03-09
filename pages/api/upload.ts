import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { getFileOriginalExtension } from '@/utils/getFileOriginalExtension';
import { generateUUIDv4 } from '@/utils/generateUUIDv4';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
      const extension = getFileOriginalExtension(file);
      const randomId = generateUUIDv4();
      const newName = `${randomId}.${extension}`;
      console.log('uploading file', newName);
      return cb(null, file.originalname);
    },
  }),
  fileFilter: (req, file, cb) => {
    // this prevents the upload of files that are not images
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    const extension = getFileOriginalExtension(file);
    if (!extension) return cb(new Error('File type not allowed'));
    if (allowedExtensions.includes(extension)) {
      return cb(null, true);
    }
    return cb(new Error('File type not allowed'));
  },
});

const apiRoute = nc<NextApiRequest, NextApiResponse>({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('image'));

apiRoute.post((req, res) => {
  let path = (req as any).file.path as string;
  path = path.replace('public', ''); // the path we get has public in it, so we need to remove it
  path = path.replace(/\\/g, '/'); // replace backslashes with forward slashes (for Windows)
  // the end result of the path should be as follow: /uploads/your-image-name.jpg
  res.status(200).json({ path });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
