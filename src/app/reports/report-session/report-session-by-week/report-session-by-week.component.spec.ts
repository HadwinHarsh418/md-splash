import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSessionByWeekComponent } from './report-session-by-week.component';

describe('ReportSessionByWeekComponent', () => {
  let component: ReportSessionByWeekComponent;
  let fixture: ComponentFixture<ReportSessionByWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportSessionByWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSessionByWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
