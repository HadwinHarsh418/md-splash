import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePsychiatricProgressNoteComponent } from './mobile-psychiatric-progress-note.component';

describe('MobilePsychiatricProgressNoteComponent', () => {
  let component: MobilePsychiatricProgressNoteComponent;
  let fixture: ComponentFixture<MobilePsychiatricProgressNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilePsychiatricProgressNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePsychiatricProgressNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
