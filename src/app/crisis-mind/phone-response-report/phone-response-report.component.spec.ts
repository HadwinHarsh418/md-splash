import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneResponseReportComponent } from './phone-response-report.component';

describe('PhoneResponseReportComponent', () => {
  let component: PhoneResponseReportComponent;
  let fixture: ComponentFixture<PhoneResponseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneResponseReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneResponseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
