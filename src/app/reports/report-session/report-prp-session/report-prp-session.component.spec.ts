import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPrpSessionComponent } from './report-prp-session.component';

describe('ReportPrpSessionComponent', () => {
  let component: ReportPrpSessionComponent;
  let fixture: ComponentFixture<ReportPrpSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPrpSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPrpSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
