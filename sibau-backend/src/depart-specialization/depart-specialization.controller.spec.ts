import { Test, TestingModule } from '@nestjs/testing';
import { DepartSpecializationController } from './depart-specialization.controller';
import { DepartSpecializationService } from './depart-specialization.service';

describe('DepartSpecializationController', () => {
  let controller: DepartSpecializationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartSpecializationController],
      providers: [DepartSpecializationService],
    }).compile();

    controller = module.get<DepartSpecializationController>(
      DepartSpecializationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
