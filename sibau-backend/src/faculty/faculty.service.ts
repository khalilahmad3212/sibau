import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faculty } from './faculty.entity';

@Injectable()
export class FacultyService {
  constructor(
    @InjectRepository(Faculty)
    private facultyRepository: Repository<Faculty>,
  ) { }

  findAll(): Promise<Faculty[]> {
    return this.facultyRepository.find({ relations: ['departments', 'dean'] });
  }

  findOne(id: number): Promise<Faculty> {
    return this.facultyRepository.findOne({
      where: {
        Id: id
      },
      relations: ['departments', 'dean']
    });
  }

  create(faculty: Faculty): Promise<Faculty> {
    
    return this.facultyRepository.save(faculty);
  }

  async update(id: number, faculty: Faculty): Promise<void> {
    await this.facultyRepository.update(id, faculty);
  }

  async remove(id: number): Promise<void> {
    await this.facultyRepository.delete(id);
  }
}
