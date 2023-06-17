import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileResponseReportComponent } from './mobile-response-report.component';

describe('MobileResponseReportComponent', () => {
  let component: MobileResponseReportComponent;
  let fixture: ComponentFixture<MobileResponseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileResponseReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileResponseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
