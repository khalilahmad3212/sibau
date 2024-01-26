import { Test, TestingModule } from '@nestjs/testing';
import { SemesterDataService } from './semester-data.service';

describe('SemesterDataService', () => {
  let service: SemesterDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SemesterDataService],
    }).compile();

    service = module.get<SemesterDataService>(SemesterDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
