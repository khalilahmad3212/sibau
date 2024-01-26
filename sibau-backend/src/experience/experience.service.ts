import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { GetExperienceDto } from './dto/get-experience-.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { Experience } from './entities/experience.entity';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectRepository(Experience)
    private experienceRepository: Repository<Experience>,
  ) {}
  async create(createExperienceDto: CreateExperienceDto) {
    return await this.experienceRepository.save(createExperienceDto);
  }

  async findAll(getExperienceDto: GetExperienceDto): Promise<Experience[]> {
    const options: FindManyOptions<Experience> = {};

    if (getExperienceDto.Filter) {
      options.where = getExperienceDto.Filter;
    }

    if (getExperienceDto.Limit) {
      options.take = Number(getExperienceDto.Limit);
    }

    if (getExperienceDto.Page) {
      options.skip = getExperienceDto.Limit || 10 * (getExperienceDto.Page - 1);
    }
    
    return this.experienceRepository.find(options);
  }

  async findOne(id: number) {
    return await this.experienceRepository.findOne({
      where: { Id: id },
    });
  }

  async update(id: number, updateExperienceDto: UpdateExperienceDto) {
    return await this.experienceRepository.update(id, updateExperienceDto);
  }

  async remove(id: number) {
    return await this.experienceRepository.delete(id);
  }
}
