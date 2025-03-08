import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { Cemetery } from 'src/cemeteries/entities/cemetery.entity';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';

@Module({
  imports: [TypeOrmModule.forFeature([City, Cemetery])],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CitiesModule {}
