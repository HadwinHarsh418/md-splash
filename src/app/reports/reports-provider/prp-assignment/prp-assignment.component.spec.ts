import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrpAssignmentComponent } from './prp-assignment.component';

describe('PrpAssignmentComponent', () => {
  let component: PrpAssignmentComponent;
  let fixture: ComponentFixture<PrpAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrpAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrpAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
