import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMobileTreatmentPlanComponent } from './upcoming-mobile-treatment-plan.component';

describe('UpcomingMobileTreatmentPlanComponent', () => {
  let component: UpcomingMobileTreatmentPlanComponent;
  let fixture: ComponentFixture<UpcomingMobileTreatmentPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingMobileTreatmentPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingMobileTreatmentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
