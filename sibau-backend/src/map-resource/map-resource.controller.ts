import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MapResourceService } from './map-resource.service';
import { CreateMapResourceDto } from './dto/create-map-resource.dto';
import { UpdateMapResourceDto } from './dto/update-map-resource.dto';

@Controller('map-resources')
export class MapResourceController {
  constructor(private readonly mapResourceService: MapResourceService) {}

  @Post()
  create(@Body() createMapResourceDto: CreateMapResourceDto) {
    console.log('the data is received ', createMapResourceDto);
    return this.mapResourceService.create(createMapResourceDto);
  }

  @Get('page/:page')
  findByPage(@Param('page') page: string) {
    return this.mapResourceService.findByPage(page);
  }
  @Get('key/:key')
  findByKey(@Param('key') key: string) {
    return this.mapResourceService.findByKey(key);
  }

  @Get()
  findAll() {
    return this.mapResourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mapResourceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMapResourceDto: UpdateMapResourceDto,
  ) {
    return this.mapResourceService.update(+id, updateMapResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mapResourceService.remove(+id);
  }
}
