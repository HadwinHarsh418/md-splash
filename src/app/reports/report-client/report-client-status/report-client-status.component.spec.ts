import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportClientStatusComponent } from './report-client-status.component';

describe('ReportClientStatusComponent', () => {
  let component: ReportClientStatusComponent;
  let fixture: ComponentFixture<ReportClientStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportClientStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportClientStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
