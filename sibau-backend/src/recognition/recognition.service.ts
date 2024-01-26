import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRecognitionDto } from './dto/create-recognition.dto';
import { UpdateRecognitionDto } from './dto/update-recognition.dto';
import { Recognition } from './entities/recognition.entity';

@Injectable()
export class RecognitionService {
  constructor(
    @InjectRepository(Recognition)
    private recognitionRepository: Repository<Recognition>,
  ) {}
  async create(createRecognitionDto: CreateRecognitionDto) {
    return await this.recognitionRepository.save(createRecognitionDto);
  }

  async findAll() {
    return await this.recognitionRepository.find();
  }

  async findOne(id: number) {
    return await this.recognitionRepository.findOne({
      where: { Id: id },
    });
  }

  async update(id: number, updateRecognitionDto: UpdateRecognitionDto) {
    return await this.recognitionRepository.update(id, updateRecognitionDto);
  }

  async remove(id: number) {
    return await this.recognitionRepository.delete(id);
  }
}
