import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DepartSpecializationService } from './depart-specialization.service';
import { CreateDepartSpecializationDto } from './dto/create-depart-specialization.dto';
import { UpdateDepartSpecializationDto } from './dto/update-depart-specialization.dto';

@Controller('depart-specialization')
export class DepartSpecializationController {
  constructor(
    private readonly departSpecializationService: DepartSpecializationService,
  ) {}

  @Post()
  create(@Body() createDepartSpecializationDto: CreateDepartSpecializationDto) {
    console.log(createDepartSpecializationDto);
    return this.departSpecializationService.create(
      createDepartSpecializationDto,
    );
  }

  @Get()
  findAll() {
    return this.departSpecializationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departSpecializationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDepartSpecializationDto: UpdateDepartSpecializationDto,
  ) {
    return this.departSpecializationService.update(
      +id,
      updateDepartSpecializationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departSpecializationService.remove(+id);
  }
}
