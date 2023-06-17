import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceAgingReportProvidersComponent } from './insurance-aging-report-providers.component';

describe('InsuranceAgingReportProvidersComponent', () => {
  let component: InsuranceAgingReportProvidersComponent;
  let fixture: ComponentFixture<InsuranceAgingReportProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceAgingReportProvidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceAgingReportProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
