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
  Request,
  UseGuards,
} from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import * as fs from 'fs';
import { Response } from 'express';

import * as path from 'path';
import { deleteFile, uploadFile } from '../utils/common.util';
import { EmployeeService } from 'src/employee/employee.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

const docsPath = 'publication';

@Controller('publication')
export class PublicationController {
  constructor(
    private readonly publicationService: PublicationService,
    private employeeService: EmployeeService,
  ) { }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  @Post()
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Request() req: any,
    @Body('year') year: string,
    @Body('type') type: string,
    @Body('title') title: string,
  ) {

    const userId = req.user.userId;
    const creator = await this.employeeService.findOne(userId);

    console.log('Creator: ', creator);
    let fileName;
    if (file) {
      fileName = uploadFile(file, docsPath)
    }
    try {

      const careerObject = {
        Title: title,
        Authors: creator.FirstName + ' ' + creator.LastName,
        Year: new Date(),
        Link: fileName,
        JounalName: title,
        Type: type,
        Employee: creator.Id
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

  @Get('employee/:id')
  async findAllByEmployee(@Param('id') id: string) {
    // const resource = await this.employeeService.findOne(+id);
    console.log('Hello Id: ', id);
    return this.publicationService.findEmployeePublications(+id);
  }
  // @Get(':filename')
  // getFile(@Param('filename') filename: string, @Res() res: Response) {
  //   const downloadPath = path.join('./uploads', 'document', docsPath, filename); // Specify the upload directory path
  //   console.log(downloadPath);
  //   if (fs.existsSync(downloadPath)) {
  //     const readStream = fs.createReadStream(downloadPath);
  //     return readStream.pipe(res);
  //   } else {
  //     throw new NotFoundException('File Not Found');
  //   }
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publicationService.findOne(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updatePublicationDto: UpdatePublicationDto,
  // ) {
  //   return this.publicationService.update(+id, updatePublicationDto);
  // }

  @UseInterceptors(FileInterceptor('file'))
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body('year') year: string,
    @Body('type') type: string,
    @Body('title') title: string,
  ) {

    const existingResource = await this.publicationService.findOne(+id);
    if (!existingResource) {
      throw new NotFoundException('Publication not Found');
    }

    const careerObject: UpdatePublicationDto = {
      Title: title,
      Authors: 'Sukkur IBA',
      Year: new Date(year),
      Link: null,
      JounalName: title,
      Type: type,
    };

    try {
      if (file) {
        deleteFile(existingResource.Link, docsPath);
        const filename = uploadFile(file, docsPath);
        careerObject.Link = filename;
      } else {
        careerObject.Link = existingResource.Link;
      }
      return this.publicationService.update(+id, careerObject);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to upload file');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const existingResource = await this.publicationService.findOne(+id);
    if (!existingResource) {
      throw new NotFoundException('Publication not Found');
    }

    try {
      deleteFile(existingResource.Link, docsPath);
      return this.publicationService.remove(+id);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to delete publication');
    }
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
