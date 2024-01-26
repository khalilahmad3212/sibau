import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DynamicPageService } from './dynamic-page.service';
import { CreateDynamicPageDto } from './dto/create-dynamic-page.dto';
import { UpdateDynamicPageDto } from './dto/update-dynamic-page.dto';

@Controller('dynamic-page')
export class DynamicPageController {
  constructor(private readonly dynamicPageService: DynamicPageService) {}

  @Post()
  create(@Body() createDynamicPageDto: CreateDynamicPageDto) {
    return this.dynamicPageService.create(createDynamicPageDto);
  }

  @Get()
  findAll() {
    return this.dynamicPageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dynamicPageService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDynamicPageDto: UpdateDynamicPageDto,
  ) {
    return this.dynamicPageService.update(+id, updateDynamicPageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dynamicPageService.remove(+id);
  }
}
