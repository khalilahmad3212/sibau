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
  Request,
  UseGuards
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
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CampusService } from '../campus/campus.service';

const docsPath = 'profile'
@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService,
    private campusService: CampusService,
    private departmentService: DepartmentService,
  ) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createEmployeeDto: any
  ) {
    console.log('data: ', createEmployeeDto);

    try {
      if (file) {
        const fileName = uploadFile(file, docsPath)
        createEmployeeDto.Image = fileName;
      }

      const department = await this.departmentService.findOne(
        createEmployeeDto.Department,
      );

      const campus = await this.campusService.findOne(
        createEmployeeDto.Campus,
      );

      return this.employeeService.create(createEmployeeDto, department, campus);
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

  @Get('campus/:id')
  findByCampus(@Param('id') campusId: number): Promise<Employee[]> {
    return this.employeeService.findByCampusId(campusId);
  }

  @Get('emp/:id')
  findByEmployeeID(@Param('id') departmentId: string): Promise<Employee> {
    return this.employeeService.findByEmployeeID(departmentId);
  }


  @UseGuards(JwtAuthGuard)
  @Get('my-account')
  async getProfile(@Request() req) {
    const userId = parseInt(req.user.userId, 10);

    if (isNaN(userId)) {
      throw new Error('Invalid user ID');
    }

    console.log('Here it is:', userId);
    return { user: await this.employeeService.findOne(+userId) };
  }

  @Get('faculty-dean/:id')
  getDean(@Param('id') id: string) {
    console.log('hello: ', id);

    return this.employeeService.getFacultyDean(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('changepassword')
  async changePassword(
    @Request() req,
    @Body() changePasswordDto: any,
  ) {

    console.log('user: ', req.user);

    const existingResource = await this.employeeService.findOne(+req.user.userId);
    if (!existingResource) {
      throw new NotFoundException('Employee not found');
    }

    if (changePasswordDto.oldPassword !== existingResource.Password) {
      throw new NotFoundException('Old Password is Wrong!');
    }

    return this.employeeService.changePassword(+existingResource.Id, changePasswordDto);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateEmployeeDto: any,
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


    const campus = await this.campusService.findOne(
      updateEmployeeDto.Campus,
    );
    return this.employeeService.update(+id, updateEmployeeDto, department, campus);
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


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
