import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EducationService } from './education.service';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { GetEducationDto } from './dto/get-education.dto';
import { EmployeeService } from 'src/employee/employee.service';

@Controller('education')
export class EducationController {
  constructor(
    private readonly educationService: EducationService,
    private readonly employeeService: EmployeeService
  ) { }

  @Post()
  async create(@Body() createEducationDto: any) {
    // TODO: Dynamic it
    createEducationDto.Employee = await this.employeeService.findOne(1);
    return this.educationService.create(createEducationDto);
  }

  @Get()
  findAll(@Body() getEducationDto: GetEducationDto) {
    return this.educationService.findAll(getEducationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.educationService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEducationDto: any) {
    // TODO: Dynamic it
    updateEducationDto.Employee = await this.employeeService.findOne(1);
    return this.educationService.update(+id, updateEducationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.educationService.remove(+id);
  }
}
