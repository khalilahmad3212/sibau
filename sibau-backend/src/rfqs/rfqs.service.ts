import { Injectable } from '@nestjs/common';
import { CreateRfqDto } from './dto/create-rfq.dto';
import { UpdateRfqDto } from './dto/update-rfq.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rfq } from './entities/rfq.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RfqsService {
  constructor(
    @InjectRepository(Rfq)
    private rfqRepo: Repository<Rfq>,
  ) {}

  create(createRfqDto: CreateRfqDto) {
    return this.rfqRepo.save(createRfqDto);
  }

  findAll() {
    return this.rfqRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} rfq`;
  }

  update(id: number, updateRfqDto: UpdateRfqDto) {
    // return this.rfqRepo.update()
  }

  remove(id: number) {
    return `This action removes a #${id} rfq`;
  }
}
