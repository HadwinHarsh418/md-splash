import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTreatmentAssignmentComponent } from './mobile-treatment-assignment.component';

describe('MobileTreatmentAssignmentComponent', () => {
  let component: MobileTreatmentAssignmentComponent;
  let fixture: ComponentFixture<MobileTreatmentAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTreatmentAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTreatmentAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
