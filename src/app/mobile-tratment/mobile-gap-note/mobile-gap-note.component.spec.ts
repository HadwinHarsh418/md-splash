import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileGapNoteComponent } from './mobile-gap-note.component';

describe('MobileGapNoteComponent', () => {
  let component: MobileGapNoteComponent;
  let fixture: ComponentFixture<MobileGapNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileGapNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileGapNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
