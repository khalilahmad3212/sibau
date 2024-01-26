import { Injectable } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Career } from './entities/career.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CareersService {
  constructor(
    @InjectRepository(Career)
    private careerRepo: Repository<Career>,
  ) {}
  create(createCareerDto: CreateCareerDto) {
    return this.careerRepo.save(createCareerDto);
  }

  findAll() {
    return this.careerRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} career`;
  }

  update(id: number, updateCareerDto: UpdateCareerDto) {
    return `This action updates a #${id} career`;
  }

  remove(id: number) {
    return `This action removes a #${id} career`;
  }
}
