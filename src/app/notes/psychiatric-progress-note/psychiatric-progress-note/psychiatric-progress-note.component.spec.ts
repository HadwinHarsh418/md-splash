import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychiatricProgressNoteComponent } from './psychiatric-progress-note.component';

describe('PsychiatricProgressNoteComponent', () => {
  let component: PsychiatricProgressNoteComponent;
  let fixture: ComponentFixture<PsychiatricProgressNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychiatricProgressNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychiatricProgressNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
