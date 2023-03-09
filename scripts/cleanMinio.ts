import * as Minio from 'minio';

const minIoClient = new Minio.Client({
  endPoint: 'localhost',
  port: 9000,
  useSSL: false,
  accessKey: 'minio-root-user',
  secretKey: 'minio-root-password',
});

const getAllObjects = async (bucketName: string) => {
  const data: Minio.BucketItem[] = [];
  const steam = minIoClient.listObjectsV2('images');
  return new Promise<Minio.BucketItem[]>((resolve, reject) => {
    steam.on('data', (obj) => {
      data.push(obj);
    });
    steam.on('end', () => {
      resolve(data);
    });
    steam.on('error', (err) => {
      reject(err);
    });
  });
};

const main = async () => {
  const buketExists = await minIoClient.bucketExists('images');
  if (buketExists) {
    const objects = await getAllObjects('images');
    if (objects.length > 0) {
      const objectsNames = objects.map((obj) => obj.name);
      await minIoClient.removeObjects('images', objectsNames);
    }
    await minIoClient.removeBucket('images');
  }
  // create public bucket
  await minIoClient.makeBucket('images', 'us-east-1');
  await minIoClient.setBucketPolicy(
    'images',
    JSON.stringify({
      Version: '2012-10-17',
      Statement: [
        {
          Sid: 'PublicRead',
          Effect: 'Allow',
          Principal: '*',
          Action: ['s3:GetObject'],
          Resource: ['arn:aws:s3:::images/*'],
        },
      ],
    })
  );
};

main();
