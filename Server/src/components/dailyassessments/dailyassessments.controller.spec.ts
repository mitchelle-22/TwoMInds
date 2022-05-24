import { Test, TestingModule } from '@nestjs/testing';
import { DailyassessmentsController } from './dailyassessments.controller';

describe('DailyassessmentsController', () => {
  let controller: DailyassessmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyassessmentsController],
    }).compile();

    controller = module.get<DailyassessmentsController>(DailyassessmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
