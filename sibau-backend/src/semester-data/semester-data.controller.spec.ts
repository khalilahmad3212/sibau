import { Test, TestingModule } from '@nestjs/testing';
import { SemesterDataController } from './semester-data.controller';
import { SemesterDataService } from './semester-data.service';

describe('SemesterDataController', () => {
  let controller: SemesterDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SemesterDataController],
      providers: [SemesterDataService],
    }).compile();

    controller = module.get<SemesterDataController>(SemesterDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
