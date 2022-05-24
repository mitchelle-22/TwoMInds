import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActivityReviewComponent } from './admin-activity-review.component';

describe('AdminActivityReviewComponent', () => {
  let component: AdminActivityReviewComponent;
  let fixture: ComponentFixture<AdminActivityReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminActivityReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActivityReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
