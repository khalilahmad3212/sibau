import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeptwiseProgramSpecailzationService } from './deptwise-program-specailzation.service';
import { CreateDeptwiseProgramSpecailzationDto } from './dto/create-deptwise-program-specailzation.dto';
import { UpdateDeptwiseProgramSpecailzationDto } from './dto/update-deptwise-program-specailzation.dto';

@Controller('deptwise-program-specailzation')
export class DeptwiseProgramSpecailzationController {
  constructor(private readonly deptwiseProgramSpecailzationService: DeptwiseProgramSpecailzationService) {}

  @Post()
  create(@Body() createDeptwiseProgramSpecailzationDto: CreateDeptwiseProgramSpecailzationDto) {
    return this.deptwiseProgramSpecailzationService.create(createDeptwiseProgramSpecailzationDto);
  }

  @Get()
  findAll() {
    return this.deptwiseProgramSpecailzationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deptwiseProgramSpecailzationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeptwiseProgramSpecailzationDto: UpdateDeptwiseProgramSpecailzationDto) {
    return this.deptwiseProgramSpecailzationService.update(+id, updateDeptwiseProgramSpecailzationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deptwiseProgramSpecailzationService.remove(+id);
  }
}
