import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Cemetery } from 'src/cemeteries/entities/cemetery.entity';
import { City } from 'src/cities/entities/city.entity';
import { DeadOne } from 'src/deadOnes/entities/deadOne.entity';
import { Grave } from 'src/graves/entities/grave.entity';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'db',
  port: parseInt('5432', 10),
  username: 'underground',
  password: 'kilofkuby',
  database: 'underground',
  entities: [City, Cemetery, Grave, DeadOne],
  migrations: ['dist/src/migration/**/*.js'],
  synchronize: true,
  logging: false,
};
