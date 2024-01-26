import { Test, TestingModule } from '@nestjs/testing';
import { DepartSpecializationService } from './depart-specialization.service';

describe('DepartSpecializationService', () => {
  let service: DepartSpecializationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepartSpecializationService],
    }).compile();

    service = module.get<DepartSpecializationService>(DepartSpecializationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
