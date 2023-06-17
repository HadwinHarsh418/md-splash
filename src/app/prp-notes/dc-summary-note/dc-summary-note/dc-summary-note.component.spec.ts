import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcSummaryNoteComponent } from './dc-summary-note.component';

describe('DcSummaryNoteComponent', () => {
  let component: DcSummaryNoteComponent;
  let fixture: ComponentFixture<DcSummaryNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcSummaryNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcSummaryNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
