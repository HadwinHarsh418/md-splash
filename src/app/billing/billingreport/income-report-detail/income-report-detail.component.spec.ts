import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeReportDetailComponent } from './income-report-detail.component';

describe('IncomeReportDetailComponent', () => {
  let component: IncomeReportDetailComponent;
  let fixture: ComponentFixture<IncomeReportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeReportDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
