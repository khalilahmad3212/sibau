import { Test, TestingModule } from '@nestjs/testing';
import { DynamicPageController } from './dynamic-page.controller';
import { DynamicPageService } from './dynamic-page.service';

describe('DynamicPageController', () => {
  let controller: DynamicPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DynamicPageController],
      providers: [DynamicPageService],
    }).compile();

    controller = module.get<DynamicPageController>(DynamicPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
