import { container } from 'tsyringe';
import uploadConfig from '@config/upload';
import DiskStorageProvider from './implemantations/DiskStorageProvider';
import IStorageProvider from './models/IStorageProvider';
import S3StorageProvider from './implemantations/S3StorageProvider';

const providers = {
  disk: DiskStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers[uploadConfig.driver],
);
