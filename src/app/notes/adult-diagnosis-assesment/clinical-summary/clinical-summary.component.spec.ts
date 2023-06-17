import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalSummaryComponent } from './clinical-summary.component';

describe('ClinicalSummaryComponent', () => {
  let component: ClinicalSummaryComponent;
  let fixture: ComponentFixture<ClinicalSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicalSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
