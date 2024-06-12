import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { GetDepartmentDto } from './dto/get-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { deleteFile, uploadFile } from '../utils/common.util';
import { AuthGuard } from '@nestjs/passport';

const docsPath = 'department'
@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) { }

  @UseInterceptors(FileInterceptor('file'))
  @Post()
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createDepartmentDto: CreateDepartmentDto) {
    console.log('file: ', file);
    console.log('data: ', createDepartmentDto);
    try {
      if (file) {
        const filename = uploadFile(file, docsPath);
        createDepartmentDto.Logo = filename;
      } else {
        createDepartmentDto.Logo = '';
      }

      return this.departmentService.create(createDepartmentDto);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to upload file');
    }
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get('list')
  getNames() {
    return this.departmentService.findNames();
  }

  @Get('faculty/:id')
  facultyDepartments(@Param('id') id: string) {
    return this.departmentService.getFacultyDepartments(id);
  }

  @Get()
  findAll(@Body() getDepartmentDto: GetDepartmentDto) {
    return this.departmentService.findAll(getDepartmentDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentService.findOne(+id);
  }

  @UseInterceptors(FileInterceptor('file'))
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateDepartmentDto: any,
  ) {

    const existingResource = await this.departmentService.findOne(+id);
    if (!existingResource) {
      throw new NotFoundException('Publication not Found');
    }

    try {
      if (file) {
        deleteFile(existingResource.Logo, docsPath);
        const filename = uploadFile(file, docsPath);
        updateDepartmentDto.Logo = filename;
      } else {
        updateDepartmentDto.Logo = existingResource.Logo;
      }
      return this.departmentService.update(+id, updateDepartmentDto);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to Update Department');
    }

  }

  @Delete(':id')
  async remove(@Param('id') id: string) {

    const existingResource = await this.departmentService.findOne(+id);
    if (!existingResource) {
      throw new NotFoundException('Publication not Found');
    }

    deleteFile(existingResource.Logo, docsPath);

    return this.departmentService.remove(+id);
  }
}
