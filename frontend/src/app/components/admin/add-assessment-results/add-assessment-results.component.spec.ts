import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssessmentResultsComponent } from './add-assessment-results.component';

describe('AddAssessmentResultsComponent', () => {
  let component: AddAssessmentResultsComponent;
  let fixture: ComponentFixture<AddAssessmentResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAssessmentResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssessmentResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
