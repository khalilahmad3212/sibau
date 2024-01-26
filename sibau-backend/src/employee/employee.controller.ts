import { GetEmployeetDto } from './dto/get-employee-.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { GetPhdsDto } from './dto/get-phds-dto';
import { DepartmentService } from 'src/department/department.service';

@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService,
    private departmentService: DepartmentService,
  ) {}

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    const department = await this.departmentService.findOne(
      createEmployeeDto.Department,
    );

    return this.employeeService.create(createEmployeeDto, department);
  }

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }
  @Get('type/phds')
  findPhds(@Query() getPhdsDto: GetPhdsDto): Promise<Employee[]> {
    return this.employeeService.findPhds(getPhdsDto);
  }

  @Get('department/:id')
  findByDepartmentId(@Param('id') departmentId: number): Promise<Employee[]> {
    return this.employeeService.findByDepartmentId(departmentId);
  }

  @Get('emp/:id')
  findByEmployeeID(@Param('id') departmentId: string): Promise<Employee> {
    return this.employeeService.findByEmployeeID(departmentId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    const department = await this.departmentService.findOne(
      updateEmployeeDto.Department,
    );

    return this.employeeService.update(+id, updateEmployeeDto, department);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
