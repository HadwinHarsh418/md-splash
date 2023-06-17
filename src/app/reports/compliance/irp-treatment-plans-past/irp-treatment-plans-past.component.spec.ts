import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrpTreatmentPlansPastComponent } from './irp-treatment-plans-past.component';

describe('IrpTreatmentPlansPastComponent', () => {
  let component: IrpTreatmentPlansPastComponent;
  let fixture: ComponentFixture<IrpTreatmentPlansPastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrpTreatmentPlansPastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrpTreatmentPlansPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
