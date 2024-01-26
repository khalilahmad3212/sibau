import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { GetEventDto } from './dto/get-experience-.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
  ) {}
  async create(createEventDto: CreateEventDto) {
    return await this.eventRepository.save(createEventDto);
  }

  async findAll(getEventDto: GetEventDto): Promise<Event[]> {
    const options: FindManyOptions<Event> = {};

    if (getEventDto.Filter) {
      options.where = getEventDto.Filter;
    }

    if (getEventDto.Limit) {
      options.take = Number(getEventDto.Limit);
    }

    if (getEventDto.Page) {
      options.skip = getEventDto.Limit || 10 * (getEventDto.Page - 1);
    }
    
    return this.eventRepository.find(options);
  }

  async findOne(id: number) {
    return await this.eventRepository.findOne({
      where: { Id: id },
    });
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    return await this.eventRepository.update(id, updateEventDto);
  }

  async remove(id: number) {
    return await this.eventRepository.delete(id);
  }
}
