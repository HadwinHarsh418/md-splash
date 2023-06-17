import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileProgressNoteComponent } from './mobile-progress-note.component';

describe('MobileProgressNoteComponent', () => {
  let component: MobileProgressNoteComponent;
  let fixture: ComponentFixture<MobileProgressNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileProgressNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileProgressNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
