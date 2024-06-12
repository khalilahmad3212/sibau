import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  UploadedFile,
  Res,
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';

import { TenderService } from './tender.service';
import { CreateTenderDto } from './dto/create-tender.dto';
import { UpdateTenderDto } from './dto/update-tender.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import * as fs from 'fs';
import * as path from 'path';

const docsPath = 'tender';
@Controller('tender')
export class TenderController {
  constructor(private readonly tenderService: TenderService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body('title') title: string,
    @Body('lastDate') lastDate: string,
    @Body('openingDate') openingDate: string,
    @Body('fee') fee: number,
    @Body('contact') contact: string,
    @Body('category') category: string,
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
      const rfqDto: CreateTenderDto = {
        title: title,
        category: category,
        contact: contact,
        lastDate: lastDate,
        fee: fee,
        openingDate: openingDate,
        updatedFileName: newFileName,
        originalFileName: file.originalname,
      };
      return this.tenderService.create(rfqDto);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to upload file');
    }
  }

  @Get()
  findAll() {
    return this.tenderService.findAll();
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
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tenderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTenderDto: UpdateTenderDto) {
    return this.tenderService.update(+id, updateTenderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tenderService.remove(+id);
  }
}
