import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserRecommendationComponent } from './add-user-recommendation.component';

describe('AddUserRecommendationComponent', () => {
  let component: AddUserRecommendationComponent;
  let fixture: ComponentFixture<AddUserRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserRecommendationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
