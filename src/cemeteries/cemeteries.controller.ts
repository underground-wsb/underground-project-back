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
import { CemeteriesService } from './cemeteries.service';
import { Admin } from 'typeorm';

@Controller('cemeteries')
export class CemeteriesController {
  constructor(private readonly cemeteriesService: CemeteriesService) {}

  @Get()
  findAll(@Query('cemeteryName') cemeteryName?: string) {
    return this.cemeteriesService.findAll({ cemeteryName });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cemeteriesService.findOne(+id);
  }
}
