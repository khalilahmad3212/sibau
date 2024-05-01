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
  NotFoundException
} from '@nestjs/common';
import { diskStorage } from "multer";
import * as fs from 'fs';
import * as path from 'path';
import { SliderService } from './slider.service';
import { CreateSliderDto } from './dto/create-slider.dto';
import { UpdateSliderDto } from './dto/update-slider.dto';
import { GetSliderDto } from './dto/get-slider.dto';
import { FileInterceptor } from '@nestjs/platform-express';

import { deleteFile, uploadFile } from '../utils/common.util';

const docsPath = 'slider-images';

const storage = {
  storage: diskStorage({
    destination: './uploads/slider',
    filename: (req, file, cb) => {
      const fileExtension = path.extname(file.originalname);
      const fileNameWithoutExtension = path.basename(
        file.originalname,
        fileExtension,
      );
      const currentDateTime = new Date().toISOString().replace(/[:\-T.]/g, '');
      const newFileName = `${fileNameWithoutExtension}_${currentDateTime}${fileExtension}`;

      cb(null, newFileName)
    }
  })
}

@Controller('slider')
export class SliderController {
  constructor(private readonly sliderService: SliderService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CreateSliderDto
  ) {

    try {
      let fileName;
      if (file) {
        fileName = uploadFile(file, docsPath)
      }

      const careerObject: CreateSliderDto = {
        Title: body.Title,
        Headings: body.Headings,
        LinkTitle: body.LinkTitle,
        Link: body.Link,
        Image: fileName
      };
      return this.sliderService.create(careerObject);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to upload file');
    }
  }

  @Get()
  findAll(@Body() getSliderDto: GetSliderDto) {
    return this.sliderService.findAll(getSliderDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sliderService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() body: UpdateSliderDto
  ) {

    const existingResource = await this.sliderService.findOne(+id);
    if (!existingResource) {
      throw new NotFoundException('Slider not found');
    }

    try {
      if (file) {
        deleteFile(existingResource.Image, docsPath);
        const fileName = uploadFile(file, docsPath);
        existingResource.Image = fileName;
      }

      if (body.Title) {
        existingResource.Title = body.Title;
      }

      if (body.Headings) {
        existingResource.Headings = body.Headings;
      }

      if (body.LinkTitle) {
        existingResource.LinkTitle = body.LinkTitle;
      }

      if (body.Link) {
        existingResource.Link = body.Link;
      }

      return this.sliderService.update(+id, existingResource);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to upload file');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const existingResource = await this.sliderService.findOne(+id);
    if (!existingResource) {
      throw new NotFoundException('Slider not found');
    }

    let uploadPath = path.join('./uploads', docsPath); // Specify the upload directory path
    const filePath = path.join(uploadPath, existingResource.Image);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Deleted file ${existingResource.Image}`);
      }
    });
    return this.sliderService.remove(+id);
  }
}
