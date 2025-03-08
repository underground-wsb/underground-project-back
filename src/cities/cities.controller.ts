import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities') // Update controller path
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  findAll(@Query('cityName') cityName?: string) {
    return this.citiesService.findAll({ cityName });
  }

  @Get('/all')
  findWithEmpty(@Query('cityName') cityName?: string) {
    return this.citiesService.findWithEmpty({ cityName });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citiesService.findOne(+id);
  }
}
