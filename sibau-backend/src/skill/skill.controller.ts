import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SkillService } from './skill.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { GetSkillDto } from './dto/get-skill.dto';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post()
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillService.create(createSkillDto);
  }

  @Get()
  findAll(@Body() getSkillDto: GetSkillDto) {
    return this.skillService.findAll(getSkillDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillService.update(+id, updateSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillService.remove(+id);
  }
}
