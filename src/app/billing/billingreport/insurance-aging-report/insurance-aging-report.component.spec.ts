import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceAgingReportComponent } from './insurance-aging-report.component';

describe('InsuranceAgingReportComponent', () => {
  let component: InsuranceAgingReportComponent;
  let fixture: ComponentFixture<InsuranceAgingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceAgingReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceAgingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
