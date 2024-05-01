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
  UseInterceptors,
  UploadedFile,
  NotFoundException,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { GetPhdsDto } from './dto/get-phds-dto';
import { DepartmentService } from 'src/department/department.service';
import { CreateCheckDto } from './dto/check-employee.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { deleteFile, uploadFile } from 'src/utils/common.util';
import { UpdateCheckEmployeeDto } from './dto/update-check-employee.dto';
import { UpdateEmployeeProfileDto } from './dto/update-employee-profile.dto';

const docsPath = 'profile'
@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService,
    private departmentService: DepartmentService,
  ) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createEmployeeDto: CreateEmployeeDto
  ) {
    try {
      let fileName;
      if (file) {
        fileName = uploadFile(file, docsPath)
        createEmployeeDto.Image = fileName;
      }

      const department = await this.departmentService.findOne(
        createEmployeeDto.Department,
      );

      // Update the image attribute
      // createEmployeeDto.BPS = +createEmployeeDto.BPS
      return this.employeeService.create(createEmployeeDto, department);
    } catch (error) {
      console.error(error);
      throw new Error('Error While Creating Employee');
    }
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
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {

    console.log('data: ', updateEmployeeDto);

    const existingResource = await this.employeeService.findOne(+id);
    if (!existingResource) {
      throw new NotFoundException('Employee not found');
    }

    if (file) {
      deleteFile(existingResource.Image, docsPath);
      const filename = uploadFile(file, docsPath);
      updateEmployeeDto.Image = filename;
    }

    const department = await this.departmentService.findOne(
      updateEmployeeDto.Department,
    );

    return this.employeeService.update(+id, updateEmployeeDto, department);
  }

  @Patch('profile/:id')
  @UseInterceptors(FileInterceptor('file'))
  async updateProfile(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateEmployeeProfileDto: UpdateEmployeeProfileDto,
  ) {

    const existingResource = await this.employeeService.findOne(+id);
    if (!existingResource) {
      throw new NotFoundException('Employee not found');
    }

    if (file) {
      deleteFile(existingResource.Image, docsPath);
      const filename = uploadFile(file, docsPath);
      updateEmployeeProfileDto.Image = filename;
    }

    return this.employeeService.updateProfile(+id, updateEmployeeProfileDto);
  }


  // @Patch('changepassword/:id')
  // async changePassword(
  //   @Param('id') id: string,
  //   @Body() changePasswordDto: any,
  // ) {

  //   const existingResource = await this.employeeService.findOne(+id);
  //   if (!existingResource) {
  //     throw new NotFoundException('Employee not found');
  //   }

  //   if (changePasswordDto.oldPassword !== existingResource.Password) {
  //     throw new NotFoundException('Old Password is Wrong!');
  //   }

  //   return this.employeeService.changePassword(+id, changePasswordDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
