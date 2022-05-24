import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialyAssessementQuestionComponent } from './dialy-assessement-question.component';

describe('DialyAssessementQuestionComponent', () => {
  let component: DialyAssessementQuestionComponent;
  let fixture: ComponentFixture<DialyAssessementQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialyAssessementQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialyAssessementQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
