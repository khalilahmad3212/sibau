import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecognitionService } from './recognition.service';
import { CreateRecognitionDto } from './dto/create-recognition.dto';
import { UpdateRecognitionDto } from './dto/update-recognition.dto';

@Controller('recognition')
export class RecognitionController {
  constructor(private readonly recognitionService: RecognitionService) {}

  @Post()
  create(@Body() createRecognitionDto: CreateRecognitionDto) {
    return this.recognitionService.create(createRecognitionDto);
  }

  @Get()
  findAll() {
    return this.recognitionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recognitionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecognitionDto: UpdateRecognitionDto) {
    return this.recognitionService.update(+id, updateRecognitionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recognitionService.remove(+id);
  }
}
