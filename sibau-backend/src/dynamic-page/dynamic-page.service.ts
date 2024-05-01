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
  ) { }
  create(createDynamicPageDto: CreateDynamicPageDto) {
    return this.pageRepo.save(createDynamicPageDto);
  }

  findAll() {
    return this.pageRepo.find();
  }

  async findOne(id: number) {
    return await this.pageRepo.findOne({
      where: { Id: id }
    });
  }

  async getPageData(link: string) {
    return await this.pageRepo.findOne({
      where: { link }
    });
  }

  async update(id: number, updateDynamicPageDto: any) {

    const page = await this.findOne(id);
    if (!page) {
      throw new Error('Page not found');
    }

    return this.pageRepo.save({
      ...page,
      ...updateDynamicPageDto
    });
  }

  remove(id: number) {
    return `This action removes a #${id} dynamicPage`;
  }
}
