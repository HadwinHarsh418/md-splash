import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementProgressNoteComponent } from './management-progress-note.component';

describe('ManagementProgressNoteComponent', () => {
  let component: ManagementProgressNoteComponent;
  let fixture: ComponentFixture<ManagementProgressNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementProgressNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementProgressNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
