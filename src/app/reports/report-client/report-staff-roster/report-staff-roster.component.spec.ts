import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportStaffRosterComponent } from './report-staff-roster.component';

describe('ReportStaffRosterComponent', () => {
  let component: ReportStaffRosterComponent;
  let fixture: ComponentFixture<ReportStaffRosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportStaffRosterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportStaffRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
