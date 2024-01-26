import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateResourceDto } from './dto/create-resource.dto';
import { GetResourceDto } from './dto/get-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import { Resource } from './entities/resource.entity';

@Injectable()
export class ResourceService {
  constructor(
    @InjectRepository(Resource)
    private resourceRespository: Repository<Resource>,
  ) {}
  async create(createResourceDto: CreateResourceDto) {
    return await this.resourceRespository.save(createResourceDto);
  }

  async findAll(getResourceDto: GetResourceDto): Promise<Resource[]> {
    const options: FindManyOptions<Resource> = {};

    if (getResourceDto.Filter) {
      options.where = getResourceDto.Filter;
    }

    if (getResourceDto.Limit) {
      options.take = Number(getResourceDto.Limit);
    }

    if (getResourceDto.Page) {
      options.skip = getResourceDto.Limit || 10 * (getResourceDto.Page - 1);
    }

    return this.resourceRespository.find(options);
  }

  async findOne(id: number) {
    return await this.resourceRespository.findOne({
      where: { Id: id },
    });
  }

  async update(id: number, updateResourceDto: UpdateResourceDto) {
    return await this.resourceRespository.update(id, updateResourceDto);
  }

  async remove(id: number) {
    return await this.resourceRespository.delete(id);
  }
}
