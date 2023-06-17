import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPrpSessionBillingComponent } from './report-prp-session-billing.component';

describe('ReportPrpSessionBillingComponent', () => {
  let component: ReportPrpSessionBillingComponent;
  let fixture: ComponentFixture<ReportPrpSessionBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPrpSessionBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPrpSessionBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
