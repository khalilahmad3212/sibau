import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateEducationDto } from './dto/create-education.dto';
import { GetEducationDto } from './dto/get-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { Education } from './entities/education.entity';

@Injectable()
export class EducationService {
  constructor(
    @InjectRepository(Education)
    private educationRepository: Repository<Education>,
  ) {}

  async create(createEducationDto: CreateEducationDto) {
    return await this.educationRepository.save(createEducationDto);
  }

  async findAll(getEducationDto: GetEducationDto): Promise<Education[]> {
    const options: FindManyOptions<Education> = {};
    
    if (getEducationDto.Filter) {
      options.where = getEducationDto.Filter;
    }

    if (getEducationDto.Limit) {
      options.take = Number(getEducationDto.Limit);
    }

    if (getEducationDto.Page) {
      options.skip = getEducationDto.Limit || 10 * (getEducationDto.Page - 1);
    }
    
    return this.educationRepository.find(options);
  }

  async findOne(id: number) {
    return await this.educationRepository.findOne({
      where: { Id: id },
    });
  }

  async update(id: number, updateEducationDto: UpdateEducationDto) {
    return await this.educationRepository.update(id, updateEducationDto);
  }

  async remove(id: number) {
    return await this.educationRepository.delete(id);
  }
}
