import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportClientPayorComponent } from './report-client-payor.component';

describe('ReportClientPayorComponent', () => {
  let component: ReportClientPayorComponent;
  let fixture: ComponentFixture<ReportClientPayorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportClientPayorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportClientPayorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
