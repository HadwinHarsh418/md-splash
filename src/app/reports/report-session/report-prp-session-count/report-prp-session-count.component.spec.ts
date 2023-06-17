import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPrpSessionCountComponent } from './report-prp-session-count.component';

describe('ReportPrpSessionCountComponent', () => {
  let component: ReportPrpSessionCountComponent;
  let fixture: ComponentFixture<ReportPrpSessionCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPrpSessionCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPrpSessionCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
