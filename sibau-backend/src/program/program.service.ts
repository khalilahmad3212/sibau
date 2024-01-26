import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateProgramDto } from './dto/create-program.dto';
import { GetProgramDto } from './dto/get-program-.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { Program } from './entities/program.entity';

@Injectable()
export class ProgramService {
  constructor(
    @InjectRepository(Program) private programRepository: Repository<Program>,
  ) {}
  async create(createProgramDto: CreateProgramDto) {
    return await this.programRepository.save(createProgramDto);
  }

  async findAll(getProgramDto: GetProgramDto): Promise<Program[]> {
    const options: FindManyOptions<Program> = {};

    if (getProgramDto.Filter) {
      options.where = getProgramDto.Filter;
    }

    if (getProgramDto.Limit) {
      options.take = Number(getProgramDto.Limit);
    }

    if (getProgramDto.Page) {
      options.skip = getProgramDto.Limit || 10 * (getProgramDto.Page - 1);
    }

    return this.programRepository.find(options);
  }

  async findOne(id: number) {
    return await this.programRepository.findOne({
      where: { Id: id },
    });
  }

  async update(id: number, updateProgramDto: UpdateProgramDto) {
    return await this.programRepository.update(id, updateProgramDto);
  }

  async remove(id: number) {
    return await this.programRepository.delete(id);
  }
}
