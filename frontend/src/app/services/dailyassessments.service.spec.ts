import { TestBed } from '@angular/core/testing';

import { DailyassessmentsService } from './dailyassessments.service';

describe('DailyassessmentsService', () => {
  let service: DailyassessmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyassessmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
