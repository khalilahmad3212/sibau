import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  NotFoundException,
} from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { GetOrganizationDto } from './dto/get-organization-.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { deleteFile, uploadFile } from '../utils/common.util';

const docsPath = "orgonization";
@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) { }

  @UseInterceptors(FileInterceptor('file'))
  @Post()
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createOrganizationDto: any) {

    try {
      if (file) {
        const filename = uploadFile(file, docsPath);
        createOrganizationDto.Logo = filename;
      } else {
        createOrganizationDto.Logo = '';
      }

      return this.organizationService.create(createOrganizationDto);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to upload file');
    }
  }

  @Get()
  findAll(@Body() getOrganizationDto: GetOrganizationDto) {
    return this.organizationService.findAll(getOrganizationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organizationService.findOne(+id);
  }

  @UseInterceptors(FileInterceptor('file'))
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateOrganizationDto: any,
  ) {

    const existingResource = await this.organizationService.findOne(+id);
    if (!existingResource) {
      throw new NotFoundException('Organization not Found');
    }

    try {
      if (file) {
        deleteFile(existingResource.Logo, docsPath);
        const filename = uploadFile(file, docsPath);
        updateOrganizationDto.Logo = filename;
      } else {
        updateOrganizationDto.Logo = existingResource.Logo;
      }
      return this.organizationService.update(+id, updateOrganizationDto);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to Update Department');
    }

  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organizationService.remove(+id);
  }
}
