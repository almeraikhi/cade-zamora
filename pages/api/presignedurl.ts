import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import * as Minio from 'minio';

const minIoClient = new Minio.Client({
  endPoint: 'localhost',
  port: 9000,
  useSSL: false,
  accessKey: 'minio-root-user',
  secretKey: 'minio-root-password',
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

apiRoute.post(async (req, res) => {
  const { name } = req.body;
  const presignedUrl = await minIoClient.presignedPutObject('images', name);
  res.status(200).json({ presignedUrl });
});

export default apiRoute;

export const config = {
  //   api: {
  //     bodyParser: false, // Disallow body parsing, consume as stream
  //   },
};
