import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportunderAgeStatusComponent } from './reportunder-age-status.component';

describe('ReportunderAgeStatusComponent', () => {
  let component: ReportunderAgeStatusComponent;
  let fixture: ComponentFixture<ReportunderAgeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportunderAgeStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportunderAgeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
