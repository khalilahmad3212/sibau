import { GetPublicationDto } from "./dto/get-publication.dto";
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { Publication } from './entities/publication.entity';
import { Employee } from "../employee/entities/employee.entity";

@Injectable()
export class PublicationService {
  constructor(
    @InjectRepository(Publication)
    private publicationRepository: Repository<Publication>,
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) { }
  async create(createPublicationDto: any) {
    return await this.publicationRepository.save(createPublicationDto);
  }

  async findAll(getPublicationDto: GetPublicationDto): Promise<Publication[]> {
    const options: FindManyOptions<Publication> = {};

    if (getPublicationDto.Filter) {
      options.where = getPublicationDto.Filter;
    }

    if (getPublicationDto.Limit) {
      options.take = Number(getPublicationDto.Limit);
    }

    if (getPublicationDto.Page) {
      options.skip = getPublicationDto.Limit || 10 * (getPublicationDto.Page - 1);
    }

    return this.publicationRepository.find(options);
  }

  async findOne(id: number) {
    return await this.publicationRepository.findOne({
      where: { Id: id },
    });
  }

  async update(id: number, updatePublicationDto: UpdatePublicationDto) {
    return await this.publicationRepository.update(id, updatePublicationDto);
  }

  async remove(id: number) {
    return await this.publicationRepository.delete(id);
  }

  async findEmployeePublications(id: number) {
    console.log('id: ', id);
    const employee = await this.employeeRepository.findOne({
      where: { Id: id },
      relations: ["Publications"]
    })

    if (!employee) {
      throw new Error('Employee not found');
    }

    console.log('employee: ', employee);
    return employee.Publications;
  }
}
