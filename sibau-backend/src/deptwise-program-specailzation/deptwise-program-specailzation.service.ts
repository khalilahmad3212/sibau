import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeptwiseProgramSpecailzationDto } from './dto/create-deptwise-program-specailzation.dto';
import { UpdateDeptwiseProgramSpecailzationDto } from './dto/update-deptwise-program-specailzation.dto';
import { Deptwiseprogramspecilization } from './entities/deptwise-program-specailzation.entity';

@Injectable()
export class DeptwiseProgramSpecailzationService {
  constructor(
    @InjectRepository(Deptwiseprogramspecilization)
    private deptWiseProgramSpecializationRepository: Repository<Deptwiseprogramspecilization>,
  ) {}
  async create(
    createDeptwiseProgramSpecailzationDto: CreateDeptwiseProgramSpecailzationDto,
  ) {
    return await this.deptWiseProgramSpecializationRepository.save(
      createDeptwiseProgramSpecailzationDto,
    );
  }

  async findAll() {
    return await this.deptWiseProgramSpecializationRepository.find();
  }

  async findOne(id: number) {
    return await this.deptWiseProgramSpecializationRepository.findOne({
      where: { Id: id },
    });
  }
  async update(
    id: number,
    updateDeptwiseProgramSpecailzationDto: UpdateDeptwiseProgramSpecailzationDto,
  ) {
    return await this.deptWiseProgramSpecializationRepository.update(
      id,
      updateDeptwiseProgramSpecailzationDto,
    );
  }

  async remove(id: number) {
    return await this.deptWiseProgramSpecializationRepository.delete(id);
  }
}
