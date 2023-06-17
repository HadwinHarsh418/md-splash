import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTreatmentPlansPastComponent } from './mobile-treatment-plans-past.component';

describe('MobileTreatmentPlansPastComponent', () => {
  let component: MobileTreatmentPlansPastComponent;
  let fixture: ComponentFixture<MobileTreatmentPlansPastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTreatmentPlansPastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTreatmentPlansPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
