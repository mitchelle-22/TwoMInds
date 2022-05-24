import { TestBed } from '@angular/core/testing';

import { AssessmentListService } from './assessment-list.service';

describe('AssessmentListService', () => {
  let service: AssessmentListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
