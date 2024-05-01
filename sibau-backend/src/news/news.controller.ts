import { GetNewsDto } from './dto/get-news-.dto';
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
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { uploadFile } from '../utils/common.util';

const docsPath = 'news';
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createNewsDto: any
  ) {

    if (file) {
      const fileName = uploadFile(file, docsPath)
      createNewsDto.Image = fileName;
    }
    const updatedDto = { ...createNewsDto, Date: new Date() };

    // TODO: Remove hardcoded department id
    updatedDto.DepartmentId = 1;

    return this.newsService.create(updatedDto);
  }

  @Get()
  findAll(@Body() getNewsDto: GetNewsDto) {
    return this.newsService.findAll(getNewsDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(+id);
  }


  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateNewsDto: any) {

    const existingResource = await this.newsService.findOne(+id);
    if (!existingResource) {
      throw new NotFoundException('Employee not found');
    }

    if (file) {
      const fileName = uploadFile(file, docsPath)
      updateNewsDto.Image = fileName;
    } else {
      updateNewsDto.Image = existingResource.Image;
    }

    updateNewsDto.DepartmentId = existingResource.Department;
    return this.newsService.update(+id, updateNewsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsService.remove(+id);
  }
}
