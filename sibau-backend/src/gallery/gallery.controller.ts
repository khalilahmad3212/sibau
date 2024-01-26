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

const galleryPath = 'gallery';
@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body('category') category: string,
    @Body('departmentId') departmentId?: number,
  ) {
    const fileExtension = path.extname(file.originalname);

    const currentDateTime = new Date().toISOString().replace(/[:\-T.]/g, '');
    const newFileName = `${currentDateTime}${fileExtension}`;

    const uploadPath = path.join('./uploads', 'images', galleryPath); // Specify the upload directory path
    const filePath = path.join(uploadPath, newFileName);
    try {
      // Create the directory if it doesn't exist
      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
      }
      fs.writeFileSync(filePath, file.buffer);
      const rfqDto: CreateGalleryDto = {
        Name: newFileName,
        Type: 'IMAGE',
        DepartmentId: departmentId,
      };
      return this.galleryService.create(rfqDto);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to upload file');
    }
  }

  @Get()
  findAll(@Body() getGalleryDto: GetGalleryDto) {
    return this.galleryService.findAll(getGalleryDto);
  }

  @Get(':filename')
  getFile(@Param('filename') filename: string, @Res() res: Response) {
    const downloadPath = path.join(
      './uploads',
      'images',
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
  update(@Param('id') id: string, @Body() updateGalleryDto: UpdateGalleryDto) {
    return this.galleryService.update(+id, updateGalleryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.galleryService.remove(+id);
  }
}
