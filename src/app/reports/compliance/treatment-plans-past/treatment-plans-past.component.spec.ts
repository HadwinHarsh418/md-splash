import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentPlansPastComponent } from './treatment-plans-past.component';

describe('TreatmentPlansPastComponent', () => {
  let component: TreatmentPlansPastComponent;
  let fixture: ComponentFixture<TreatmentPlansPastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentPlansPastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentPlansPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
