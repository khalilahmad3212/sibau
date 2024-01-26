import { Injectable } from '@nestjs/common';
import { CreateDynamicPageDto } from './dto/create-dynamic-page.dto';
import { UpdateDynamicPageDto } from './dto/update-dynamic-page.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DynamicPage } from './entities/dynamic-page.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DynamicPageService {
  constructor(
    @InjectRepository(DynamicPage)
    private pageRepo: Repository<DynamicPage>,
  ) {}
  create(createDynamicPageDto: CreateDynamicPageDto) {
    return this.pageRepo.save(createDynamicPageDto);
  }

  findAll() {
    return this.pageRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} dynamicPage`;
  }

  update(id: number, updateDynamicPageDto: UpdateDynamicPageDto) {
    return `This action updates a #${id} dynamicPage`;
  }

  remove(id: number) {
    return `This action removes a #${id} dynamicPage`;
  }
}
