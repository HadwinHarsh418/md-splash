import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgingReportDetailComponent } from './aging-report-detail.component';

describe('AgingReportDetailComponent', () => {
  let component: AgingReportDetailComponent;
  let fixture: ComponentFixture<AgingReportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgingReportDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgingReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
