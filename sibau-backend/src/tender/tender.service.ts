import { Injectable } from '@nestjs/common';
import { CreateTenderDto } from './dto/create-tender.dto';
import { UpdateTenderDto } from './dto/update-tender.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tender } from './entities/tender.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TenderService {
  constructor(
    @InjectRepository(Tender)
    private tenderRepo: Repository<Tender>,
  ) {}
  create(createTenderDto: CreateTenderDto) {
    this.tenderRepo.save(createTenderDto);
  }

  findAll() {
    return this.tenderRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tender`;
  }

  update(id: number, updateTenderDto: UpdateTenderDto) {
    return `This action updates a #${id} tender`;
  }

  remove(id: number) {
    return `This action removes a #${id} tender`;
  }
}
