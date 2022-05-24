import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventThinkingComponent } from './event-thinking.component';

describe('EventThinkingComponent', () => {
  let component: EventThinkingComponent;
  let fixture: ComponentFixture<EventThinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventThinkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventThinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
