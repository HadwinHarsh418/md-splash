import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileProgressNoteGeneralComponent } from './mobile-progress-note-general.component';

describe('MobileProgressNoteGeneralComponent', () => {
  let component: MobileProgressNoteGeneralComponent;
  let fixture: ComponentFixture<MobileProgressNoteGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileProgressNoteGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileProgressNoteGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
