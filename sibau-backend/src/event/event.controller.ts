import { GetEventDto } from "./dto/get-experience-.dto";
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { uploadFile } from "../utils/common.util";
import { DepartmentService } from "../department/department.service";

const docPath = 'event';
@Controller('event')
export class EventController {
  constructor(
    private readonly eventService: EventService,
    private readonly departmentService: DepartmentService,
  ) { }

  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'Image', maxCount: 1 },
    { name: 'PosterImage', maxCount: 1 },
  ]))
  async create(
    @UploadedFiles() files: { Image?: Express.Multer.File, PosterImage?: Express.Multer.File },
    @Body() createEventDto: any
  ) {
    console.log('before: ', createEventDto);

    const Image = uploadFile(files.Image[0], docPath)
    const PosterImage = uploadFile(files.PosterImage[0], docPath)

    const department = await this.departmentService.findOne(1);

    const createEventObj: CreateEventDto = {
      Title: createEventDto.Title,
      Cost: createEventDto.Cost,
      OrganizorName: createEventDto.OrganizorName,
      OrganizorPhone: createEventDto.OrganizorPhone,
      OrganizorEmail: createEventDto.OrganizorEmail,
      EndDate: new Date(createEventDto.EndDate),
      StartDate: new Date(createEventDto.StartDate),
      EventType: createEventDto.EventType,
      Image: Image,
      PosterImage: PosterImage,
      Venue: createEventDto.Venue,
      Sort: createEventDto.Sort,
      EmbededCode: createEventDto.EmbeddedCode,
      DepartmentId: 1
    }

    // return { ...createEventObj };

    return this.eventService.create(createEventObj);
  }

  @Get()
  findAll(@Body() getEventDto: GetEventDto) {
    return this.eventService.findAll(getEventDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(+id);
  }
}
