import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeReportDetailByClientComponent } from './income-report-detail-by-client.component';

describe('IncomeReportDetailByClientComponent', () => {
  let component: IncomeReportDetailByClientComponent;
  let fixture: ComponentFixture<IncomeReportDetailByClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeReportDetailByClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeReportDetailByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
