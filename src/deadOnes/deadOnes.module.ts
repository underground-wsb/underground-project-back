import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeadOne } from './entities/deadOne.entity';
import { DeadOnesController } from './deadOnes.controller';
import { DeadOnesService } from './deadOnes.service';

@Module({
  imports: [TypeOrmModule.forFeature([DeadOne])],
  controllers: [DeadOnesController],
  providers: [DeadOnesService],
})
export class DeadOnesModule {}
