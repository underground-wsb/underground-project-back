import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Grave } from './entities/grave.entity';
import { DeadOne } from 'src/deadOnes/entities/deadOne.entity';

@Injectable()
export class GravesService {
  constructor(
    @InjectRepository(Grave)
    private gravesRepository: Repository<Grave>,
    @InjectRepository(DeadOne)
    private deadOnesRepository: Repository<DeadOne>,
  ) {}

  async findAll(): Promise<Grave[]> {
    const queryBuilder = this.gravesRepository.createQueryBuilder('grave');
    queryBuilder.innerJoinAndSelect('grave.deadIbes', 'deadOne');

    queryBuilder.orderBy('grave.latitude', 'ASC');

    return queryBuilder.getMany();
  }

  async findOne(id: number): Promise<Grave> {
    const grave = await this.gravesRepository.findOne({
      where: { id },
      relations: ['deadOnes'],
    });
    if (!grave) {
      throw new NotFoundException(`Grave with ID ${id} not found`);
    }
    return grave;
  }
}
