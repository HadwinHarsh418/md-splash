import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSessionByWeek2Component } from './report-session-by-week2.component';

describe('ReportSessionByWeek2Component', () => {
  let component: ReportSessionByWeek2Component;
  let fixture: ComponentFixture<ReportSessionByWeek2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportSessionByWeek2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSessionByWeek2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
