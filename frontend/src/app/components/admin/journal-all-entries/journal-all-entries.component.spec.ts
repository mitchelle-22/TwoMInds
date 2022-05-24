import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalAllEntriesComponent } from './journal-all-entries.component';

describe('JournalAllEntriesComponent', () => {
  let component: JournalAllEntriesComponent;
  let fixture: ComponentFixture<JournalAllEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalAllEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalAllEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
