import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateResourceTypeDto } from './dto/create-resource-type.dto';
import { UpdateResourceTypeDto } from './dto/update-resource-type.dto';
import { ResourceType } from './entities/resource-type.entity';

@Injectable()
export class ResourceTypeService {
  constructor(
    @InjectRepository(ResourceType)
    private resourceTypeRespository: Repository<ResourceType>,
  ) {}
  async create(createResourceTypeDto: CreateResourceTypeDto) {
    return await this.resourceTypeRespository.save(createResourceTypeDto);
  }

  async findAll() {
    return await this.resourceTypeRespository.find();
  }

  async findOne(id: number) {
    return await this.resourceTypeRespository.findOne({
      where: { Id: id },
    });
  }

  async update(id: number, updateResourceTypeDto: UpdateResourceTypeDto) {
    return await this.resourceTypeRespository.update(id, updateResourceTypeDto);
  }

  async remove(id: number) {
    return await this.resourceTypeRespository.delete(id);
  }
}
