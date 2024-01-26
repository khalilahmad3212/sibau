import { Test, TestingModule } from '@nestjs/testing';
import { MapResourceService } from './map-resource.service';

describe('MapResourceService', () => {
  let service: MapResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MapResourceService],
    }).compile();

    service = module.get<MapResourceService>(MapResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
