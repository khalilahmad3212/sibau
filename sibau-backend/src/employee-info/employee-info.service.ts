import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeInfo } from './entities/employee-info.entity';
import { CreateEmployeeInfoDto } from './dto/create-employee-info.dto';
import { UpdateEmployeeInfoDto } from './dto/update-employee-info.dto';

@Injectable()
export class EmployeeInfoService {
  constructor(
    @InjectRepository(EmployeeInfo)
    private readonly employeeInfoRepository: Repository<EmployeeInfo>,
  ) {}

  async create(createEmployeeInfoDto: CreateEmployeeInfoDto) {
    const employeeInfo = this.employeeInfoRepository.create(
      createEmployeeInfoDto,
    );
    return await this.employeeInfoRepository.save(employeeInfo);
  }
  async findByEmployeeId(id: string) {
    return await this.employeeInfoRepository.findOne({
      where: { employee: id },
    });
  }

  async findAll() {
    return await this.employeeInfoRepository.find();
  }

  async findOne(id: string) {
    const employeeInfo = await this.employeeInfoRepository.findOne({
      where: { employee: id },
    });

    if (!employeeInfo) {
      throw new NotFoundException(`EmployeeInfo with ID #${id} not found`);
    }
    return employeeInfo;
  }

  async update(id: string, updateEmployeeInfoDto: UpdateEmployeeInfoDto) {
    const existingEmployeeInfo = await this.employeeInfoRepository.findOne({
      where: { employee: id },
    });

    if (!existingEmployeeInfo) {
      throw new NotFoundException(`EmployeeInfo with ID #${id} not found`);
    }

    // Update properties based on the DTO
    this.employeeInfoRepository.merge(
      existingEmployeeInfo,
      updateEmployeeInfoDto,
    );

    return await this.employeeInfoRepository.save(existingEmployeeInfo);
  }

  async remove(id: number) {
    const employeeInfo = await this.employeeInfoRepository.findOne({
      where: { id },
    });
    return await this.employeeInfoRepository.remove(employeeInfo);
  }
}
