import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultDiagnosisAssesmentComponent } from './adult-diagnosis-assesment.component';

describe('AdultDiagnosisAssesmentComponent', () => {
  let component: AdultDiagnosisAssesmentComponent;
  let fixture: ComponentFixture<AdultDiagnosisAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdultDiagnosisAssesmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultDiagnosisAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
