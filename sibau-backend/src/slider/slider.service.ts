import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateSliderDto } from './dto/create-slider.dto';
import { GetSliderDto } from './dto/get-slider.dto';
import { UpdateSliderDto } from './dto/update-slider.dto';
import { Slider } from './entities/slider.entity';

@Injectable()
export class SliderService {
  constructor(
    @InjectRepository(Slider) private sliderRepository: Repository<Slider>,
  ) {}
  async create(createSliderDto: CreateSliderDto) {
    return await this.sliderRepository.save(createSliderDto);
  }

  async findAll(getSliderDto: GetSliderDto): Promise<Slider[]> {
    const options: FindManyOptions<Slider> = {};

    if (getSliderDto.Filter) {
      options.where = getSliderDto.Filter;
    }

    if (getSliderDto.Limit) {
      options.take = Number(getSliderDto.Limit);
    }

    if (getSliderDto.Page) {
      options.skip = getSliderDto.Limit || 10 * (getSliderDto.Page - 1);
    }

    return this.sliderRepository.find(options);
  }

  async findOne(id: number) {
    return await this.sliderRepository.findOne({
      where: { Id: id },
    });
  }

  async update(id: number, updateSliderDto: UpdateSliderDto) {
    return await this.sliderRepository.update(id, updateSliderDto);
  }

  async remove(id: number) {
    return await this.sliderRepository.delete(id);
  }
}
