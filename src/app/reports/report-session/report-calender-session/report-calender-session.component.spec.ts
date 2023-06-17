import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCalenderSessionComponent } from './report-calender-session.component';

describe('ReportCalenderSessionComponent', () => {
  let component: ReportCalenderSessionComponent;
  let fixture: ComponentFixture<ReportCalenderSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCalenderSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCalenderSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
