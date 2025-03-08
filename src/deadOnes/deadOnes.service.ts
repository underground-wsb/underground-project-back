import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { DeadOne } from './entities/deadOne.entity';

@Injectable()
export class DeadOnesService {
  constructor(
    @InjectRepository(DeadOne)
    private deadOnesRepository: Repository<DeadOne>,
  ) {}

  async findWithEmpty(
    filters: { deadOneName?: string } = {},
  ): Promise<DeadOne[]> {
    const { deadOneName } = filters;

    const where: any = {};
    if (deadOneName) {
      where.name = Like(`%${deadOneName}%`);
    }

    return this.deadOnesRepository.find({
      where,
      order: {
        name: 'ASC',
      },
    });
  }

  async findAll(filters: { deadOneName?: string } = {}): Promise<DeadOne[]> {
    const { deadOneName } = filters;

    const queryBuilder = this.deadOnesRepository.createQueryBuilder('deadOne');

    if (deadOneName) {
      queryBuilder.where('deadOne.name LIKE :name', {
        name: `%${deadOneName}%`,
      });
    }

    queryBuilder.orderBy('deadOne.name', 'ASC');

    return queryBuilder.getMany();
  }

  async findOne(id: number): Promise<DeadOne> {
    const deadOne = await this.deadOnesRepository.findOne({
      where: { id },
    });
    if (!deadOne) {
      throw new NotFoundException(`Person with ID ${id} not found`);
    }
    return deadOne;
  }
}
