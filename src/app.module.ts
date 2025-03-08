import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesModule } from './cities/cities.module';
import { CemeteriesModule } from './cemeteries/cemeteries.module';
import { GravesModule } from './graves/graves.module';
import { DeadOnesModule } from './deadOnes/deadOnes.module';
import { config } from 'ormconfig';

@Module({
  imports: [
    CitiesModule,
    CemeteriesModule,
    GravesModule,
    DeadOnesModule,
    TypeOrmModule.forRoot(config),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
