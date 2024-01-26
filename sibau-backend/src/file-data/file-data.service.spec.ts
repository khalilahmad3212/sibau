import { Test, TestingModule } from '@nestjs/testing';
import { FileDataService } from './file-data.service';

describe('FileDataService', () => {
  let service: FileDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileDataService],
    }).compile();

    service = module.get<FileDataService>(FileDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
