// campus.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campus } from './campus.entity';

@Injectable()
export class CampusService {
  async findNames() {
    const campuses = await this.campusRepository
      .createQueryBuilder('campus')
      .select(['campus.Id', 'campus.Name'])
      .getMany();

    return campuses;
  }

  constructor(
    @InjectRepository(Campus)
    private readonly campusRepository: Repository<Campus>,
  ) { }

  async findAll(): Promise<Campus[]> {
    return this.campusRepository.find();
  }

  async findOne(id: number): Promise<Campus> {
    const campus = await this.campusRepository.findOne({
      where: { Id: id },
    });
    if (!campus) {
      throw new NotFoundException('Campus not found');
    }
    return campus;
  }

  async create(campusData: any) {
    const campus = this.campusRepository.create(campusData);
    return this.campusRepository.save(campus);
  }

  async update(id: number, campusData: Campus): Promise<Campus> {
    await this.findOne(id); // Check if campus exists
    await this.campusRepository.update(id, campusData);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.findOne(id); // Check if campus exists
    await this.campusRepository.delete(id);
  }
}
