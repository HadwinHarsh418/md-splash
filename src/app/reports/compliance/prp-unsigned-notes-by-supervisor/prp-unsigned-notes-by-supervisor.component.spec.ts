import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrpUnsignedNotesBySupervisorComponent } from './prp-unsigned-notes-by-supervisor.component';

describe('PrpUnsignedNotesBySupervisorComponent', () => {
  let component: PrpUnsignedNotesBySupervisorComponent;
  let fixture: ComponentFixture<PrpUnsignedNotesBySupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrpUnsignedNotesBySupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrpUnsignedNotesBySupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
