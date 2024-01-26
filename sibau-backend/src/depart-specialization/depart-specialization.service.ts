import { Injectable } from '@nestjs/common';
import { CreateDepartSpecializationDto } from './dto/create-depart-specialization.dto';
import { UpdateDepartSpecializationDto } from './dto/update-depart-specialization.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartSpecialization } from './entities/depart-specialization.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartSpecializationService {
  constructor(
    @InjectRepository(DepartSpecialization)
    private departSpecializationRepo: Repository<DepartSpecialization>,
  ) {}

  async create(dto: CreateDepartSpecializationDto) {
    const specialization = new DepartSpecialization();
    specialization.Name = dto.Name;
    specialization.ShortName = dto.ShortName;
    specialization.Link = dto.Link;
    specialization.Desc = dto.description;
    specialization.Content = dto.Content;
    specialization.Desc = dto.Desc;
    specialization.Department = { Id: dto.Department } as any; // Set the Department relationship using the departmentId
    return this.departSpecializationRepo.save(specialization);

    // return await this.departSpecializationRepo.save(
    //   createDepartSpecializationDto,
    // );
  }

  findAll() {
    return this.departSpecializationRepo.find({ relations: ['Department'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} departSpecialization`;
  }

  update(
    id: number,
    updateDepartSpecializationDto: UpdateDepartSpecializationDto,
  ) {
    return `This action updates a #${id} departSpecialization`;
  }

  remove(id: number) {
    return `This action removes a #${id} departSpecialization`;
  }
}
