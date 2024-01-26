import { Test, TestingModule } from '@nestjs/testing';
import { FileDataController } from './file-data.controller';
import { FileDataService } from './file-data.service';

describe('FileDataController', () => {
  let controller: FileDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileDataController],
      providers: [FileDataService],
    }).compile();

    controller = module.get<FileDataController>(FileDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
