import { Test, TestingModule } from '@nestjs/testing';
import { RfqsController } from './rfqs.controller';
import { RfqsService } from './rfqs.service';

describe('RfqsController', () => {
  let controller: RfqsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RfqsController],
      providers: [RfqsService],
    }).compile();

    controller = module.get<RfqsController>(RfqsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
