import { GetPublicationDto } from "./dto/get-publication.dto";
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { Publication } from './entities/publication.entity';

@Injectable()
export class PublicationService {
  constructor(
    @InjectRepository(Publication)
    private publicationRepository: Repository<Publication>,
  ) {}
  async create(createPublicationDto: CreatePublicationDto) {
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
}
