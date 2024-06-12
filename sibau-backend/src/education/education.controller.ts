import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { EducationService } from './education.service';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { GetEducationDto } from './dto/get-education.dto';
import { EmployeeService } from '../employee/employee.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('education')
export class EducationController {
  constructor(
    private readonly educationService: EducationService,
    private readonly employeeService: EmployeeService
  ) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() req: any, @Body() createEducationDto: any) {
    console.log('user: ', req);

    createEducationDto.Employee = await this.employeeService.findOne(req.user.userId);
    return this.educationService.create(createEducationDto);
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  findAll(@Request() req: any, @Body() getEducationDto: GetEducationDto) {

    // console.log('user: ', req.user.userId);
    
    return this.educationService.findAll(getEducationDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.educationService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEducationDto: any) {
    updateEducationDto.Employee = await this.employeeService.findOne(updateEducationDto.Employee);
    return this.educationService.update(+id, updateEducationDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.educationService.remove(+id);
  }
}
