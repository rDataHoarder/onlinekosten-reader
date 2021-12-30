import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs/typings';

const config: MikroOrmModuleSyncOptions = {
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  dbName: 'onlinekosten.sqlite3',
  type: 'sqlite',
  autoLoadEntities: true,
};

export default config;
