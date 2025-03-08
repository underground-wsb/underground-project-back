import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { City } from './entities/city.entity';
import { Cemetery } from 'src/cemeteries/entities/cemetery.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private citiesRepository: Repository<City>,
    @InjectRepository(Cemetery)
    private cemeteriesRepository: Repository<Cemetery>,
  ) {}

  async findWithEmpty(filters: { cityName?: string } = {}): Promise<City[]> {
    const { cityName } = filters;

    const where: any = {};
    if (cityName) {
      where.name = Like(`%${cityName}%`);
    }

    return this.citiesRepository.find({
      where,
      relations: ['cemeteries'],
      order: {
        name: 'ASC',
      },
    });
  }

  async findAll(filters: { cityName?: string } = {}): Promise<City[]> {
    const { cityName } = filters;

    const queryBuilder = this.citiesRepository.createQueryBuilder('city');

    if (cityName) {
      queryBuilder.where('city.name LIKE :name', {
        name: `%${cityName}%`,
      });
    }

    queryBuilder.innerJoinAndSelect('city.cemeteries', 'cemetery');

    queryBuilder.orderBy('city.name', 'ASC');

    return queryBuilder.getMany();
  }

  async findOne(id: number): Promise<City> {
    const city = await this.citiesRepository.findOne({
      where: { id },
      relations: ['cemeteries'],
    });
    if (!city) {
      throw new NotFoundException(`City with ID ${id} not found`);
    }
    return city;
  }
}
