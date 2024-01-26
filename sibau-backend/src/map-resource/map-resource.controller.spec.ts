import { Test, TestingModule } from '@nestjs/testing';
import { MapResourceController } from './map-resource.controller';
import { MapResourceService } from './map-resource.service';

describe('MapResourceController', () => {
  let controller: MapResourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MapResourceController],
      providers: [MapResourceService],
    }).compile();

    controller = module.get<MapResourceController>(MapResourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
