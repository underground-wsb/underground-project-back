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
import { DeadOnesService } from './deadOnes.service';

@Controller('deadOnes')
export class DeadOnesController {
  constructor(private readonly deadOnesService: DeadOnesService) {} // Update constructor parameter

  @Get()
  findAll(@Query('deadOneName') deadOneName?: string) {
    return this.deadOnesService.findAll({ deadOneName });
  }

  @Get('/all')
  findWithEmpty(@Query('deadOneName') deadOneName?: string) {
    return this.deadOnesService.findWithEmpty({ deadOneName }); // Corrected method call
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deadOnesService.findOne(+id);
  }
}
