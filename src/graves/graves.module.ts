import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grave } from './entities/grave.entity';
import { DeadOne } from 'src/deadOnes/entities/deadOne.entity';
import { GravesController } from './graves.controller';
import { GravesService } from './graves.service';

@Module({
  imports: [TypeOrmModule.forFeature([Grave, DeadOne])],
  controllers: [GravesController],
  providers: [GravesService],
})
export class GravesModule {}
