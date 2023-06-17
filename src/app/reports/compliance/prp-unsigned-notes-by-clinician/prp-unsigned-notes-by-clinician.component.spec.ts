import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrpUnsignedNotesByClinicianComponent } from './prp-unsigned-notes-by-clinician.component';

describe('PrpUnsignedNotesByClinicianComponent', () => {
  let component: PrpUnsignedNotesByClinicianComponent;
  let fixture: ComponentFixture<PrpUnsignedNotesByClinicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrpUnsignedNotesByClinicianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrpUnsignedNotesByClinicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
