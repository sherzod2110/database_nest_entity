import { User } from '../typeorm/entities/User';
import {  DataSourceOptions } from 'typeorm';

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'sherzod2110',
  database: 'n37',
  entities: [User],
  synchronize: true,
  logging: true,
};

