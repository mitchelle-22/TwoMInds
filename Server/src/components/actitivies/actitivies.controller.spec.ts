import { Test, TestingModule } from '@nestjs/testing';
import { ActitiviesController } from './actitivies.controller';

describe('ActitiviesController', () => {
  let controller: ActitiviesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActitiviesController],
    }).compile();

    controller = module.get<ActitiviesController>(ActitiviesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
