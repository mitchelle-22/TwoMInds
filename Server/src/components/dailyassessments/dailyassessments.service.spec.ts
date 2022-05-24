import { Test, TestingModule } from '@nestjs/testing';
import { DailyassessmentsService } from './dailyassessments.service';

describe('DailyassessmentsService', () => {
  let service: DailyassessmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyassessmentsService],
    }).compile();

    service = module.get<DailyassessmentsService>(DailyassessmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
