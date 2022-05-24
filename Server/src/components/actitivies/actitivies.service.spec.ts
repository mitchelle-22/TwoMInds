import { Test, TestingModule } from '@nestjs/testing';
import { ActitiviesService } from './actitivies.service';

describe('ActitiviesService', () => {
  let service: ActitiviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActitiviesService],
    }).compile();

    service = module.get<ActitiviesService>(ActitiviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
