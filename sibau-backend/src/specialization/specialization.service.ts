import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateSpecializationDto } from './dto/create-specialization.dto';
import { GetSpecializationDto } from './dto/get-specialization.dto';
import { UpdateSpecializationDto } from './dto/update-specialization.dto';
import { Specialization } from './entities/specialization.entity';

@Injectable()
export class SpecializationService {
  constructor(
    @InjectRepository(Specialization)
    private specializationTypeRepository: Repository<Specialization>,
  ) {}
  async create(createSpecializationDto: CreateSpecializationDto) {
    return await this.specializationTypeRepository.save(
      createSpecializationDto,
    );
  }

  async findAll(
    getSpecializationDto: GetSpecializationDto,
  ): Promise<Specialization[]> {
    const options: FindManyOptions<Specialization> = {};

    if (getSpecializationDto.Filter) {
      options.where = getSpecializationDto.Filter;
    }

    if (getSpecializationDto.Limit) {
      options.take = Number(getSpecializationDto.Limit);
    }

    if (getSpecializationDto.Page) {
      options.skip =
        getSpecializationDto.Limit || 10 * (getSpecializationDto.Page - 1);
    }

    return this.specializationTypeRepository.find(options);
  }

  async findOne(id: number) {
    return await this.specializationTypeRepository.findOne({
      where: { Id: id },
    });
  }

  async update(id: number, updateSpecializationDto: UpdateSpecializationDto) {
    return await this.specializationTypeRepository.update(
      id,
      updateSpecializationDto,
    );
  }

  async remove(id: number) {
    return await this.specializationTypeRepository.delete(id);
  }
}
