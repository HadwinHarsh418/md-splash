import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsignedNotesBySupervisorComponent } from './unsigned-notes-by-supervisor.component';

describe('UnsignedNotesBySupervisorComponent', () => {
  let component: UnsignedNotesBySupervisorComponent;
  let fixture: ComponentFixture<UnsignedNotesBySupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsignedNotesBySupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsignedNotesBySupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
