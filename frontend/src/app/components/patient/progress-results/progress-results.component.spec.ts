import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressResultsComponent } from './progress-results.component';

describe('ProgressResultsComponent', () => {
  let component: ProgressResultsComponent;
  let fixture: ComponentFixture<ProgressResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
