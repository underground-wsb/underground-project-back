import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Cemetery } from './entities/cemetery.entity';
import { City } from 'src/cities/entities/city.entity';

@Injectable()
export class CemeteriesService {
  constructor(
    @InjectRepository(Cemetery)
    private cemeteryRepository: Repository<Cemetery>,
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}

  async findAll(filters: { cemeteryName?: string } = {}): Promise<Cemetery[]> {
    const { cemeteryName } = filters;

    const queryBuilder = this.cemeteryRepository.createQueryBuilder('cemetery');

    if (cemeteryName) {
      queryBuilder.where('cemetery.name LIKE :name', {
        name: `%${cemeteryName}%`,
      });
    }

    queryBuilder.innerJoinAndSelect('cemetery.graves', 'grave');

    queryBuilder.orderBy('cemetery.name', 'ASC');

    return queryBuilder.getMany();
  }

  async findOne(id: number): Promise<Cemetery> {
    const cemetery = await this.cemeteryRepository.findOne({
      where: { id },
      relations: ['graves'],
    });
    if (!cemetery) {
      throw new NotFoundException(`Cemetery with ID ${id} not found`);
    }
    return cemetery;
  }
}
