import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateNewsDto } from './dto/create-news.dto';
import { GetNewsDto } from './dto/get-news-.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private newsRepository: Repository<News>,
  ) {}
  async create(createNewsDto: CreateNewsDto) {
    return await this.newsRepository.save(createNewsDto);
  }

  async findAll(getNewsDto: GetNewsDto): Promise<News[]> {
    const options: FindManyOptions<News> = {};

    if (getNewsDto.Filter) {
      options.where = getNewsDto.Filter;
    }

    if (getNewsDto.Limit) {
      options.take = Number(getNewsDto.Limit);
    }

    if (getNewsDto.Page) {
      options.skip = getNewsDto.Limit || 10 * (getNewsDto.Page - 1);
    }

    return this.newsRepository.find(options);
  }

  async findOne(id: number) {
    return await this.newsRepository.findOne({
      where: { Id: id },
    });
  }

  async update(id: number, updateNewsDto: UpdateNewsDto) {
    return await this.newsRepository.update(id, updateNewsDto);
  }

  async remove(id: number) {
    return await this.newsRepository.delete(id);
  }
}
