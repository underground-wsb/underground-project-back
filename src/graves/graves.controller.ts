import { Controller, Get, Param } from '@nestjs/common';
import { GravesService } from './graves.service';

@Controller('graves')
export class GravesController {
  constructor(private readonly gravesService: GravesService) {}

  @Get()
  findAll() {
    return this.gravesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gravesService.findOne(+id);
  }
}
