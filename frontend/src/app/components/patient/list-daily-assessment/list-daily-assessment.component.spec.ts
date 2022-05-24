import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDailyAssessmentComponent } from './list-daily-assessment.component';

describe('ListDailyAssessmentComponent', () => {
  let component: ListDailyAssessmentComponent;
  let fixture: ComponentFixture<ListDailyAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDailyAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDailyAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
