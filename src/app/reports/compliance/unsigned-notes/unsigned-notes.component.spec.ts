import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsignedNotesComponent } from './unsigned-notes.component';

describe('UnsignedNotesComponent', () => {
  let component: UnsignedNotesComponent;
  let fixture: ComponentFixture<UnsignedNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsignedNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsignedNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
