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
  Res,
  Query,
} from '@nestjs/common';
import { Response } from 'express';
import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { GetGalleryDto } from './dto/get-gallery-.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import * as fs from 'fs';
import * as path from 'path';
import { deleteFile, uploadFile } from '../utils/common.util';

const galleryPath = 'gallery';
@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createGalleryDto: any
  ) {

    try {
      if (file) {
        const fileName = uploadFile(file, galleryPath)
        createGalleryDto.Name = fileName;
      }
      return this.galleryService.create(createGalleryDto);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to upload file');
    }
  }

  @Get()
  findAll(@Query() query: any) {
    console.log('query: ', query);
    const getGalleryDto = { Filter: { Page: query.page } };
    console.log('check: ', getGalleryDto);
    return this.galleryService.findAll(getGalleryDto);
  }

  @Get('file/:filename')
  getFile(@Param('filename') filename: string, @Res() res: Response) {
    const downloadPath = path.join(
      './uploads',
      galleryPath,
      filename,
    ); // Specify the upload directory path
    console.log(downloadPath);
    if (fs.existsSync(downloadPath)) {
      const readStream = fs.createReadStream(downloadPath);
      return readStream.pipe(res);
    } else {
      throw new NotFoundException('File Not Found');
    }
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.galleryService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateGalleryDto: UpdateGalleryDto
  ) {
    const existingResource = await this.galleryService.findOne(+id);
    if (!existingResource) {
      throw new NotFoundException('Gallery not found');
    }

    if (file) {
      deleteFile(existingResource.Name, galleryPath);
      const fileName = uploadFile(file, galleryPath);
      updateGalleryDto.Name = fileName;
    } else {
      updateGalleryDto.Name = existingResource.Name;
    }

    return this.galleryService.update(+id, updateGalleryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const existingResource = await this.galleryService.findOne(+id);
    if (!existingResource) {
      throw new NotFoundException('Gallery not found');
    }
    try {
      deleteFile(existingResource.Name, galleryPath);
    } catch {
      console.log('Error while deleting file');
    }

    return this.galleryService.remove(+id);
  }
}
