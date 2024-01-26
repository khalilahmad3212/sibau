import { Test, TestingModule } from '@nestjs/testing';
import { DeptwiseProgramSpecailzationService } from './deptwise-program-specailzation.service';

describe('DeptwiseProgramSpecailzationService', () => {
  let service: DeptwiseProgramSpecailzationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeptwiseProgramSpecailzationService],
    }).compile();

    service = module.get<DeptwiseProgramSpecailzationService>(DeptwiseProgramSpecailzationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
