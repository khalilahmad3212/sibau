import { GetPublicationDto } from './dto/get-publication.dto';
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
import { PublicationService } from './publication.service';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import * as fs from 'fs';
import { Response } from 'express';

import * as path from 'path';

const docsPath = 'publication';

@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post()
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body('year') year: string,
    @Body('type') type: string,
    @Body('title') title: string,
  ) {
    const fileExtension = path.extname(file.originalname);
    const fileNameWithoutExtension = path.basename(
      file.originalname,
      fileExtension,
    );
    const currentDateTime = new Date().toISOString().replace(/[:\-T.]/g, '');
    const newFileName = `${fileNameWithoutExtension}_${currentDateTime}${fileExtension}`;
    const uploadPath = path.join('./uploads', 'document', docsPath); // Specify the upload directory path
    const filePath = path.join(uploadPath, newFileName);
    try {
      // Create the directory if it doesn't exist
      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
      }
      fs.writeFileSync(filePath, file.buffer);
      const careerObject: CreatePublicationDto = {
        Title: title,
        Authors: 'Sukkur IBA',
        Year: new Date(year),
        Link: newFileName,
        JounalName: title,
        Type: type,
      };
      return this.publicationService.create(careerObject);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to upload file');
    }
  }

  @Get()
  findAll(@Body() getPublicationDto: GetPublicationDto) {
    return this.publicationService.findAll(getPublicationDto);
  }
  @Get(':filename')
  getFile(@Param('filename') filename: string, @Res() res: Response) {
    const downloadPath = path.join('./uploads', 'document', docsPath, filename); // Specify the upload directory path
    console.log(downloadPath);
    if (fs.existsSync(downloadPath)) {
      const readStream = fs.createReadStream(downloadPath);
      return readStream.pipe(res);
    } else {
      throw new NotFoundException('File Not Found');
    }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.publicationService.findOne(+id);
  // }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePublicationDto: UpdatePublicationDto,
  ) {
    return this.publicationService.update(+id, updatePublicationDto);
  }

  @Delete(':filename/:id')
  deleteFile(
    @Param('filename') filename: string,
    @Param('id') id: number,
    @Res() res: Response,
  ) {
    const filePath = path.join('./uploads', 'document', docsPath, filename); // Specify the upload directory path
    // this.publicationService.remove(id);
    if (fs.existsSync(filePath)) {
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error('Error deleting file:', err);
        } else {
          this.publicationService.remove(id);
          console.log('File deleted successfully');
          return true;
        }
      });
    } else {
      throw new NotFoundException('File Not Found');
    }
    return true;
  }
}
