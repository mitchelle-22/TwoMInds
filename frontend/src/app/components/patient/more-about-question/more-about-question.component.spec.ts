import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAboutQuestionComponent } from './more-about-question.component';

describe('MoreAboutQuestionComponent', () => {
  let component: MoreAboutQuestionComponent;
  let fixture: ComponentFixture<MoreAboutQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreAboutQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreAboutQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
