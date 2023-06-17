import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GapNotesComponent } from './gap-notes.component';

describe('GapNotesComponent', () => {
  let component: GapNotesComponent;
  let fixture: ComponentFixture<GapNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GapNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GapNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
