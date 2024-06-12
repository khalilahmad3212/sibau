import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { GetDepartmentDto } from './dto/get-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {
  async findNames() {
    const departments = await this.departmentRepository
      .createQueryBuilder('department')
      .select(['department.Id', 'department.Name'])
      .getMany();

    return departments;
  }
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) { }
  async create(createDepartmentDto: CreateDepartmentDto) {
    return await this.departmentRepository.save(createDepartmentDto);
  }

  async findAll(getDepartmentDto: GetDepartmentDto): Promise<Department[]> {
    const options: FindManyOptions<Department> = {};

    if (getDepartmentDto.Filter) {
      options.where = getDepartmentDto.Filter;
    }

    if (getDepartmentDto.Limit) {
      options.take = Number(getDepartmentDto.Limit);
    }

    if (getDepartmentDto.Page) {
      options.skip = getDepartmentDto.Limit || 10 * (getDepartmentDto.Page - 1);
    }

    return this.departmentRepository.find(options);
  }

  async findOne(id: number) {
    return await this.departmentRepository.findOne({
      where: { Id: id },
    });
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return await this.departmentRepository.update(id, updateDepartmentDto);
  }

  async getFacultyDepartments(id: string) {
    return await this.departmentRepository.find({
      where: { Faculty: id },
      select: ['Id', 'Name', 'Logo']
    });
  }

  async remove(id: number) {
    return await this.departmentRepository.delete(id);
  }
}
