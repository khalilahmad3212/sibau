import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, NotFoundException } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { GetAnnouncementDto } from './dto/get-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { deleteFile, uploadFile } from '../utils/common.util';

const docsPath = 'announcement';
@Controller('announcement')
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) { }


  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createAnnouncementDto: any
  ) {
    if (file) {
      const fileName = uploadFile(file, docsPath)
      createAnnouncementDto.File = fileName;
    }
    // TODO: make dynamic
    createAnnouncementDto.StartDate = new Date();
    createAnnouncementDto.EndDate = new Date();
    createAnnouncementDto.DepartmentId = 1;

    return this.announcementService.create(createAnnouncementDto);
  }

  @Get()
  findAll(@Body() getAnnouncementDto: GetAnnouncementDto) {
    return this.announcementService.findAll(getAnnouncementDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.announcementService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateAnnouncementDto: any
  ) {

    const existingResource = await this.announcementService.findOne(+id);
    if (!existingResource) {
      throw new NotFoundException('Employee not found');
    }

    if (file) {
      deleteFile(existingResource.File, docsPath);
      const fileName = uploadFile(file, docsPath)
      updateAnnouncementDto.Image = fileName;
    } else {
      updateAnnouncementDto.File = existingResource.File;
    }

    updateAnnouncementDto.DepartmentId = existingResource.Department;
    console.log(updateAnnouncementDto);

    return this.announcementService.update(+id, updateAnnouncementDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const existingResource = await this.announcementService.findOne(+id);
    if (!existingResource) {
      throw new NotFoundException('Announcement not found');
    }

    try {
      deleteFile(existingResource.File, docsPath);
    } catch {
      console.log('Error while deleting file');
    }

    return this.announcementService.remove(+id);
  }
}
