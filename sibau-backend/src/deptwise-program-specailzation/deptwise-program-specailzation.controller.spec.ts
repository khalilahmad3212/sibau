import { Test, TestingModule } from '@nestjs/testing';
import { DeptwiseProgramSpecailzationController } from './deptwise-program-specailzation.controller';
import { DeptwiseProgramSpecailzationService } from './deptwise-program-specailzation.service';

describe('DeptwiseProgramSpecailzationController', () => {
  let controller: DeptwiseProgramSpecailzationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeptwiseProgramSpecailzationController],
      providers: [DeptwiseProgramSpecailzationService],
    }).compile();

    controller = module.get<DeptwiseProgramSpecailzationController>(DeptwiseProgramSpecailzationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
