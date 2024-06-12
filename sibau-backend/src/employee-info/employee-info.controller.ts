import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { EmployeeInfoService } from './employee-info.service';
import { CreateEmployeeInfoDto } from './dto/create-employee-info.dto';
import { UpdateEmployeeInfoDto } from './dto/update-employee-info.dto';
import { EmployeeService } from '../employee/employee.service';

@Controller('employee-info')
export class EmployeeInfoController {
  constructor(
    private readonly employeeInfoService: EmployeeInfoService,
    private employeeService: EmployeeService,
  ) {}

  @Post()
  async create(@Body() createEmployeeInfoDto: CreateEmployeeInfoDto) {
    const found = await this.employeeService.findByEmployeeId(
      createEmployeeInfoDto.employee,
    );
    console.log(found, 'found');

    if (found) return this.employeeInfoService.create(createEmployeeInfoDto);
    return null;
  }

  @Get()
  findAll() {
    return this.employeeInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeInfoService.findOne(id);
  }

  @Get('employee/:id')
  async findByEmployeeId(@Param('id') id: string) {
    const employee = await this.employeeInfoService.findByEmployeeId(id);
    if (!employee) {
      throw new NotFoundException('not found by the id');
    }
    return employee;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeInfoDto: UpdateEmployeeInfoDto,
  ) {
    return this.employeeInfoService.update(id, updateEmployeeInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeInfoService.remove(+id);
  }
}
