import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrpNotesComponent } from './prp-notes.component';

describe('PrpNotesComponent', () => {
  let component: PrpNotesComponent;
  let fixture: ComponentFixture<PrpNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrpNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrpNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
