import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateSkillDto } from './dto/create-skill.dto';
import { GetSkillDto } from './dto/get-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill) private skillRespository: Repository<Skill>,
  ) {}
  async create(createSkillDto: CreateSkillDto) {
    return await this.skillRespository.save(createSkillDto);
  }

  async findAll(getSkillDto: GetSkillDto): Promise<Skill[]> {
    const options: FindManyOptions<Skill> = {};

    if (getSkillDto.Filter) {
      options.where = getSkillDto.Filter;
    }

    if (getSkillDto.Limit) {
      options.take = Number(getSkillDto.Limit);
    }

    if (getSkillDto.Page) {
      options.skip = getSkillDto.Limit || 10 * (getSkillDto.Page - 1);
    }

    return this.skillRespository.find(options);
  }

  async findOne(id: number) {
    return await this.skillRespository.findOne({
      where: { Id: id },
    });
  }

  async update(id: number, updateSkillDto: UpdateSkillDto) {
    return await this.skillRespository.update(id, updateSkillDto);
  }

  async remove(id: number) {
    return await this.skillRespository.delete(id);
  }
}
