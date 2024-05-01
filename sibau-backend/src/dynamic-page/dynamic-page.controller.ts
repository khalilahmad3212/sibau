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
  Query,
} from '@nestjs/common';
import { DynamicPageService } from './dynamic-page.service';
import { CreateDynamicPageDto } from './dto/create-dynamic-page.dto';
import { UpdateDynamicPageDto } from './dto/update-dynamic-page.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { deleteFile, uploadFile } from '../utils/common.util';

const docsPath = 'dynamic-page'

@Controller('dynamic-page')
export class DynamicPageController {
  constructor(private readonly dynamicPageService: DynamicPageService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createDynamicPageDto: any
  ) {

    try {
      let fileName;
      if (file) {
        fileName = uploadFile(file, docsPath)
        createDynamicPageDto.image = fileName;
      }
      return this.dynamicPageService.create(createDynamicPageDto);
    } catch (error) {
      console.error(error);
      throw new Error('Error While Creating Employee');
    }
  }

  @Get()
  findAll() {
    return this.dynamicPageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dynamicPageService.findOne(+id);
  }

  @Get('get-page-data/:page')
  async getPageData(
    @Param('page') page: string
  ) {
    console.log('page: ', page);

    return this.dynamicPageService.getPageData(`/${page}`);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateDynamicPageDto: any,
  ) {

    console.log('id: ', id);
    console.log('file: ', file);
    console.log('updateDynamicPageDto: ', updateDynamicPageDto);


    const existingResource = await this.dynamicPageService.findOne(+id)
    if (!existingResource) {
      throw new Error('Page not found')
    }


    try {
      if (file) {
        deleteFile(existingResource.image, docsPath)
        const fileName = uploadFile(file, docsPath)
        updateDynamicPageDto.image = fileName;
      }

      return this.dynamicPageService.update(+id, updateDynamicPageDto);
    } catch (error) {
      console.error(error);
      throw new Error('Error While Updating Employee');
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dynamicPageService.remove(+id);
  }
}
