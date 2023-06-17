import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IopGapNotesComponent } from './iop-gap-notes.component';

describe('IopGapNotesComponent', () => {
  let component: IopGapNotesComponent;
  let fixture: ComponentFixture<IopGapNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IopGapNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IopGapNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
