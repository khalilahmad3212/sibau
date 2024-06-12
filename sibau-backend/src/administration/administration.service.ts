import { Injectable } from '@nestjs/common';
import { Administration } from './entities/administration/administration';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AdministrationService {
  constructor(
    @InjectRepository(Administration)
    private readonly administrationRepository: Repository<Administration>,
  ) { }

  createAdministration(body: any) {
    return this.administrationRepository.save(body);
  }

  getAdministration() {
    return this.administrationRepository.find();
  }

  getAdministrationById(id: number) {
    return this.administrationRepository.findOne({
      where: { id }
    });
  }
}
