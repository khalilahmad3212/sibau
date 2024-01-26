import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFileDatumDto } from './dto/create-file-datum.dto';
import { UpdateFileDatumDto } from './dto/update-file-datum.dto';
import { FileDatum } from './entities/file-datum.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';

@Injectable()
export class FileDataService {
  constructor(
    @InjectRepository(FileDatum)
    private fileRepo: Repository<FileDatum>,
  ) {}

  async findByPage(page: string): Promise<FileDatum[]> {
    return this.fileRepo
      .createQueryBuilder('FileData')
      .where('FileData.page =:page', { page })
      .getMany();
  }
  create(createFileDatumDto: CreateFileDatumDto) {
    return this.fileRepo.save(createFileDatumDto);
  }

  async findAll() {
    return this.fileRepo.find();
  }

  findOne(id: number) {
    const options: FindOneOptions<FileDatum> = { where: { id } };
    return this.fileRepo.findOne(options);
  }

  update(id: number, updateFileDatumDto: UpdateFileDatumDto) {
    return this.fileRepo.update(id, updateFileDatumDto);
  }

  async remove(id: number) {
    const fileDatumToRemove = await this.findOne(id);
    if (fileDatumToRemove) {
      return this.fileRepo.remove(fileDatumToRemove);
    }
    throw new NotFoundException('File Datum not found');
  }
}
