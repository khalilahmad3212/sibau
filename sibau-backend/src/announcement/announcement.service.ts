import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { GetAnnouncementDto } from './dto/get-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { Announcement } from './entities/announcement.entity';

@Injectable()
export class AnnouncementService {
  constructor(
    @InjectRepository(Announcement)
    private announcementRepository: Repository<Announcement>,
  ) {}

  async create(createAnnouncementDto: CreateAnnouncementDto) {
    return await this.announcementRepository.save(createAnnouncementDto);
  }

  async findAll(getAnnouncementDto: GetAnnouncementDto): Promise<Announcement[]> {
    const options: FindManyOptions<Announcement> = {};
    
    if (getAnnouncementDto.Filter) {
      options.where = getAnnouncementDto.Filter;
    }

    if (getAnnouncementDto.Limit) {
      options.take = Number(getAnnouncementDto.Limit);
    }

    if (getAnnouncementDto.Page) {
      options.skip = getAnnouncementDto.Limit || 10 * (getAnnouncementDto.Page - 1);
    }
    
    return this.announcementRepository.find(options);
  }

  async findOne(id: number) {
    return await this.announcementRepository.findOne({
      where: { Id: id },
    });
  }

  async update(id: number, updateAnnouncementDto: UpdateAnnouncementDto) {
    return await this.announcementRepository.update(id, updateAnnouncementDto);
  }

  async remove(id: number) {
    return await this.announcementRepository.delete(id);
  }
}
