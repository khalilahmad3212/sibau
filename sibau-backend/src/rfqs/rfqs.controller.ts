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
  Res,
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';
import { RfqsService } from './rfqs.service';
import { CreateRfqDto } from './dto/create-rfq.dto';
import { UpdateRfqDto } from './dto/update-rfq.dto';
import { FileInterceptor } from '@nestjs/platform-express';

import * as multer from 'multer';
import * as fs from 'fs';
import * as path from 'path';

const docsPath = 'rfqs';
@Controller('rfqs')
export class RfqsController {
  constructor(private readonly rfqsService: RfqsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body('published') published: string,
    @Body('title') title: string,
    @Body('lastDate') lastDate: string,
    @Body('category') category: string,
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
      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
      }
      fs.writeFileSync(filePath, file.buffer);
      const rfqDto: CreateRfqDto = {
        title: title,
        category: category,
        contact: contact,
        lastDate: lastDate,
        published: published,
        updatedFileName: newFileName,
        originalFileName: file.originalname,
      };
      return this.rfqsService.create(rfqDto);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to upload file');
    }
  }

  @Get()
  findAll() {
    return this.rfqsService.findAll();
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
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRfqDto: UpdateRfqDto) {
    return this.rfqsService.update(+id, updateRfqDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rfqsService.remove(+id);
  }
}
