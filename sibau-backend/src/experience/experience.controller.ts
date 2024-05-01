import { GetExperienceDto } from "./dto/get-experience-.dto";
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';

@Controller('experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) { }

  @Post()
  create(@Body() createExperienceDto: any) {
    // TODO: Dynamic the User ID
    console.log(createExperienceDto);
    createExperienceDto.EmployeeId = 1;
    return this.experienceService.create(createExperienceDto);
  }

  @Get()
  findAll(@Body() getExperienceDto: GetExperienceDto) {
    return this.experienceService.findAll(getExperienceDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.experienceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExperienceDto: UpdateExperienceDto) {
    return this.experienceService.update(+id, updateExperienceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.experienceService.remove(+id);
  }
}
