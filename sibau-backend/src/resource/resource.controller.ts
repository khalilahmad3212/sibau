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
} from '@nestjs/common';
import { ResourceService } from './resource.service';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import { GetResourceDto } from './dto/get-resource.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { uploadFile } from '../utils/common.util';
import { isInstance } from 'class-validator';
import { DepartmentService } from 'src/department/department.service';
import { UpdateDepartmentDto } from 'src/department/dto/update-department.dto';

const docsPath = 'resource';
@Controller('resource')
export class ResourceController {
  constructor(
    private readonly resourceService: ResourceService,
    private readonly departmentService: DepartmentService
  ) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createResourceDto: any
  ) {
    if (file) {
      const fileName = uploadFile(file, docsPath)
      createResourceDto.LinkLocation = fileName;
    }

    return this.resourceService.create(createResourceDto);
  }

  @Get()
  findAll(@Body() getResourceDto: GetResourceDto) {
    return this.resourceService.findAll(getResourceDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resourceService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateResourceDto: any,
  ) {

    const existingResource = await this.resourceService.findOne(+id);
    if (!existingResource) {
      throw new NotFoundException('Resource not found');
    }

    if (file) {
      updateResourceDto.LinkLocation = uploadFile(file, docsPath);
    } else {
      if (updateResourceDto.LinkLocation && updateResourceDto.LinkLocation === existingResource.LinkLocation) {
        updateResourceDto.LinkLocation = existingResource.LinkLocation;
      }
    }
    if (updateResourceDto.DepartmentId && typeof updateResourceDto.DepartmentId === 'string') {
      updateResourceDto.Department = await this.departmentService.findOne(+updateResourceDto.DepartmentId);
      delete updateResourceDto.DepartmentId;
    }
    console.log(updateResourceDto);

    return this.resourceService.update(+id, updateResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resourceService.remove(+id);
  }
}
