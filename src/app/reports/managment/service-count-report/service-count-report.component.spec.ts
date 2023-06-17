import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCountReportComponent } from './service-count-report.component';

describe('ServiceCountReportComponent', () => {
  let component: ServiceCountReportComponent;
  let fixture: ComponentFixture<ServiceCountReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCountReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
