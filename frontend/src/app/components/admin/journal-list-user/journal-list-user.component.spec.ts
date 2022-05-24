import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalListUserComponent } from './journal-list-user.component';

describe('JournalListUserComponent', () => {
  let component: JournalListUserComponent;
  let fixture: ComponentFixture<JournalListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalListUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
