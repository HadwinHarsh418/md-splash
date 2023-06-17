import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCriticalincidentReportComponent } from './mobile-criticalincident-report.component';

describe('MobileCriticalincidentReportComponent', () => {
  let component: MobileCriticalincidentReportComponent;
  let fixture: ComponentFixture<MobileCriticalincidentReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCriticalincidentReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCriticalincidentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
