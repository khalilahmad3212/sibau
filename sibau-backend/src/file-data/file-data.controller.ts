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
  StreamableFile,
  NotFoundException,
} from '@nestjs/common';
import { FileDataService } from './file-data.service';
import { CreateFileDatumDto } from './dto/create-file-datum.dto';
import { UpdateFileDatumDto } from './dto/update-file-datum.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import * as fs from 'fs';
import * as path from 'path';
import { Response } from 'express';

@Controller('file-data')
export class FileDataController {
  constructor(private readonly fileDataService: FileDataService) { }
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('description') description: string,
    @Body('page') page: string,
    @Body('deadline') deadline?: string,
  ) {
    console.log('here is file: ', file);

    const fileExtension = path.extname(file.originalname);

    // Remove the original file extension
    const fileNameWithoutExtension = path.basename(
      file.originalname,
      fileExtension,
    );

    // Generate a new file name with fileName + date with seconds + extension
    const currentDateTime = new Date().toISOString().replace(/[:\-T.]/g, '');
    const newFileName = `${fileNameWithoutExtension}_${currentDateTime}${fileExtension}`;

    // Specify the file path with the new file name

    const uploadPath = path.join('./uploads', 'document'); // Specify the upload directory path
    const filePath = path.join(uploadPath, newFileName);
    try {
      // Create the directory if it doesn't exist
      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
      }
      // Save the file to the specified path
      fs.writeFileSync(filePath, file.buffer);

      const createFileDto: CreateFileDatumDto = {
        filepath: filePath,
        filename: newFileName,
        fileType: file.mimetype,
        fileSize: file.size,
        description: description,
        uploadAt: new Date(),
        deadline: deadline,
        page: page,
      };
      return this.fileDataService.create(createFileDto);
      // Return the file details or any other response as needed
      // TODO: modify the response for id
      // return {
      //   filename: newFileName,
      //   filepath: filePath,
      //   description: description,
      // };
    } catch (error) {
      console.error(error);
      throw new Error('Failed to upload file');
    }
  }

  @Get('page/:page')
  findByPage(@Param('page') page: string) {
    return this.fileDataService.findByPage(page);
  }

  @Get(':filename')
  getFile(@Param('filename') filename: string, @Res() res: Response) {
    const downloadPath = path.join('./uploads', 'document', filename); // Specify the upload directory path
    console.log(downloadPath);
    if (fs.existsSync(downloadPath)) {
      const readStream = fs.createReadStream(downloadPath);
      return readStream.pipe(res);
    } else {
      throw new NotFoundException('File Not Found');
    }
  }
  @Delete(':filename/:id')
  deleteFile(
    @Param('filename') filename: string,
    @Param('id') id: number,
    @Res() res: Response,
  ) {
    const filePath = path.join('./uploads', 'document', filename); // Specify the upload directory path
    console.log(filePath);

    // this.fileDataService.remove(id);
    if (fs.existsSync(filePath)) {
      fs.unlink(filePath, async (err) => {
        if (err) {
          console.error('Error deleting file:', err);
        } else {
          const old = await this.fileDataService.remove(id);
          console.log('File deleted successfully: ', old);
          res.status(200).json(old);
        }
      });
    } else {
      throw new NotFoundException('File Not Found');
    }
  }

  @Get()
  findAll() {
    return this.fileDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileDataService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFileDatumDto: UpdateFileDatumDto,
  ) {
    return this.fileDataService.update(+id, updateFileDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileDataService.remove(+id);
  }
}
