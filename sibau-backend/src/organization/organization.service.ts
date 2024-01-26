import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { GetOrganizationDto } from './dto/get-organization-.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
  ) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    console.log(createOrganizationDto);
    return await this.organizationRepository.save(createOrganizationDto);
  }

  async findAll(getOrganizationDto: GetOrganizationDto): Promise<Organization[]> {
    const options: FindManyOptions<Organization> = {};

    if (getOrganizationDto.Filter) {
      options.where = getOrganizationDto.Filter;
    }

    if (getOrganizationDto.Limit) {
      options.take = Number(getOrganizationDto.Limit);
    }

    if (getOrganizationDto.Page) {
      options.skip = getOrganizationDto.Limit || 10 * (getOrganizationDto.Page - 1);
    }

    return this.organizationRepository.find(options);
  }

  async findOne(id: number) {
    return await this.organizationRepository.findOne({
      where: { Id: id },
    });
  }

  async update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return await this.organizationRepository.update(id, updateOrganizationDto);
  }

  async remove(id: number) {
    return await this.organizationRepository.delete(id);
  }
}
