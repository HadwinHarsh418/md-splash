import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsignedIopNotesComponent } from './unsigned-iop-notes.component';

describe('UnsignedIopNotesComponent', () => {
  let component: UnsignedIopNotesComponent;
  let fixture: ComponentFixture<UnsignedIopNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsignedIopNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsignedIopNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
