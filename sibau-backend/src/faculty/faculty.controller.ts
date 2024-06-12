import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FacultyService } from './faculty.service';
import { Faculty } from './faculty.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { EmployeeService } from 'src/employee/employee.service';

@Controller('faculty')
export class FacultyController {
  constructor(
    private readonly facultyService: FacultyService,
    private employeeService: EmployeeService,
  ) { }

  @Get()
  findAll(): Promise<Faculty[]> {
    return this.facultyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Faculty> {
    return this.facultyService.findOne(+id);
  }

  @Post()
  create(@Body() faculty: Faculty): Promise<Faculty> {
    console.log('faculty: ', faculty);

    return this.facultyService.create(faculty);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() faculty: Faculty) {
    return this.facultyService.update(+id, faculty);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facultyService.remove(+id);
  }
}
