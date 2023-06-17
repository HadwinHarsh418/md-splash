import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingTreatmentPlanComponent } from './upcoming-treatment-plan.component';

describe('UpcomingTreatmentPlanComponent', () => {
  let component: UpcomingTreatmentPlanComponent;
  let fixture: ComponentFixture<UpcomingTreatmentPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingTreatmentPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingTreatmentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
