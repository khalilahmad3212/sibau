import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  NotFoundException,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { CareersService } from './careers.service';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import * as multer from 'multer';
import * as fs from 'fs';
import * as path from 'path';

import { FileInterceptor } from '@nestjs/platform-express';

const docsPath = 'career';
@Controller('careers')
export class CareersController {
  constructor(private readonly careersService: CareersService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body('published') published: string,
    @Body('title') title: string,
    @Body('lastDate') lastDate: string,
    @Body('contact') contact: string,
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
      // if (!fs.existsSync(uploadPath)) {
      //   fs.mkdirSync(uploadPath, { recursive: true });
      // }
      fs.writeFileSync(filePath, file.buffer);
      const careerObject: CreateCareerDto = {
        title: title,
        lastDate: lastDate,
        published: published,
        updatedFileName: newFileName,
        originalFileName: file.originalname,
      };
      return this.careersService.create(careerObject);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to upload file');
    }
  }

  @Get()
  findAll() {
    return this.careersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.careersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCareerDto: UpdateCareerDto) {
    return this.careersService.update(+id, updateCareerDto);
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.careersService.remove(+id);
  }
}
