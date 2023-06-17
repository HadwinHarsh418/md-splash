import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalIncidentReportComponent } from './critical-incident-report.component';

describe('CriticalIncidentReportComponent', () => {
  let component: CriticalIncidentReportComponent;
  let fixture: ComponentFixture<CriticalIncidentReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticalIncidentReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalIncidentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
