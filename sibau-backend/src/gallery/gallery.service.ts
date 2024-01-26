import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { Gallery } from './entities/gallery.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { GetGalleryDto } from './dto/get-gallery-.dto';

@Injectable()
export class GalleryService {
  constructor(
    @InjectRepository(Gallery) private galleryRepository: Repository<Gallery>,
  ) {}
  async create(createGalleryDto: CreateGalleryDto) {
    return await this.galleryRepository.save(createGalleryDto);
  }

  async findAll(getGalleryDto: GetGalleryDto): Promise<Gallery[]> {
    const options: FindManyOptions<Gallery> = {};

    if (getGalleryDto.Filter) {
      options.where = getGalleryDto.Filter;
    }

    if (getGalleryDto.Limit) {
      options.take = Number(getGalleryDto.Limit);
    }

    if (getGalleryDto.Page) {
      options.skip = getGalleryDto.Limit || 10 * (getGalleryDto.Page - 1);
    }

    return this.galleryRepository.find(options);
  }

  async findOne(id: number) {
    return await this.galleryRepository.findOne({
      where: { Id: id },
    });
  }

  async update(id: number, updateGalleryDto: UpdateGalleryDto) {
    return await this.galleryRepository.update(id, updateGalleryDto);
  }

  async remove(id: number) {
    return await this.galleryRepository.delete(id);
  }
}
