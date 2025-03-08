import { Module } from '@nestjs/common';
import { CemeteriesService } from './cemeteries.service';
import { CemeteriesController } from './cemeteries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from 'src/cities/entities/city.entity';
import { Cemetery } from './entities/cemetery.entity';
import { Grave } from 'src/graves/entities/grave.entity';

@Module({
  imports: [TypeOrmModule.forFeature([City, Cemetery, Grave])],
  controllers: [CemeteriesController],
  providers: [CemeteriesService],
})
export class CemeteriesModule {}
