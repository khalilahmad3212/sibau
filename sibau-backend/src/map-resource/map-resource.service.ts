import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMapResourceDto } from './dto/create-map-resource.dto';
import { UpdateMapResourceDto } from './dto/update-map-resource.dto';
import { MapResource } from './entities/map-resource.entity';

@Injectable()
export class MapResourceService {
  constructor(
    @InjectRepository(MapResource)
    private readonly mapResourceRepository: Repository<MapResource>,
  ) { }

  async create(
    createMapResourceDto: CreateMapResourceDto,
  ): Promise<MapResource> {
    const mapResource = this.mapResourceRepository.create(createMapResourceDto);
    return this.mapResourceRepository.save(mapResource);
  }

  async findAll(): Promise<MapResource[]> {
    return this.mapResourceRepository.find({
      order: { id: 'DESC' },
      take: 100,
    });
    // return this.mapResourceRepository.find({ take: 100 });
  }
  async findOne(id: number): Promise<MapResource | undefined> {
    return this.mapResourceRepository
      .createQueryBuilder('mapResource')
      .where('mapResource.page = :page', { id })
      .getOne();
  }

  async update(
    id: number,
    updateMapResourceDto: UpdateMapResourceDto,
  ): Promise<MapResource | undefined> {
    const mapResource = await this.mapResourceRepository.preload({
      id,
      ...updateMapResourceDto,
    });

    if (!mapResource) {
      return undefined;
    }
    return this.mapResourceRepository.save(mapResource);
  }

  async remove(id: number): Promise<boolean> {
    const deleteResult = await this.mapResourceRepository.delete(id);
    return deleteResult.affected > 0;
  }
  async findByKey(key: string): Promise<MapResource> {
    return this.mapResourceRepository
      .createQueryBuilder('mapResource')
      .where('mapResource.key = :key', { key })
      .getOne();
  }

  async findByPage(page: string): Promise<MapResource[]> {
    return this.mapResourceRepository
      .createQueryBuilder('mapResource')
      .where('mapResource.page = :page', { page })
      .getMany();
  }
}
