import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgramService } from './program.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { GetProgramDto } from './dto/get-program-.dto';

@Controller('program')
export class ProgramController {
  constructor(private readonly programService: ProgramService) { }

  @Post()
  create(@Body() createProgramDto: any) {

    return this.programService.create(createProgramDto);
  }

  @Get()
  findAll(@Body() getProgramDto: GetProgramDto) {
    return this.programService.findAll(getProgramDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgramDto: any) {
    console.log("hello: ", updateProgramDto);
    console.log("id: ", id);

    return this.programService.update(+id, updateProgramDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programService.remove(+id);
  }
}
