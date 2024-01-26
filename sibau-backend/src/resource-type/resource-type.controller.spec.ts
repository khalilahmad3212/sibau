import { Test, TestingModule } from '@nestjs/testing';
import { ResourceTypeController } from './resource-type.controller';
import { ResourceTypeService } from './resource-type.service';

describe('ResourceTypeController', () => {
  let controller: ResourceTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResourceTypeController],
      providers: [ResourceTypeService],
    }).compile();

    controller = module.get<ResourceTypeController>(ResourceTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
