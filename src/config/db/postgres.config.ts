import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

config();
const dbType = process.env.DATABASE_DRIVER as 'mysql' | 'postgres' | 'mongodb';

export const dbPostgresConfig: DataSourceOptions = {
  type: dbType,
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  logging: true,
  entities: ['dist/**/entities/*.entity.{ts,js}'],
  migrations: ['dist/migrations/**/*.{js,ts}'],
  migrationsRun: true,
  migrationsTableName: 'migrations_log',
};

const dataSource = new DataSource(dbPostgresConfig);
export default dataSource;
