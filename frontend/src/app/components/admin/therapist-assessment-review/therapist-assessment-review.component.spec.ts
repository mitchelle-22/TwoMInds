import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistAssessmentReviewComponent } from './therapist-assessment-review.component';

describe('TherapistAssessmentReviewComponent', () => {
  let component: TherapistAssessmentReviewComponent;
  let fixture: ComponentFixture<TherapistAssessmentReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapistAssessmentReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistAssessmentReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
