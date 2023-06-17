import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstanceAssessmentComponent } from './substance-assessment.component';

describe('SubstanceAssessmentComponent', () => {
  let component: SubstanceAssessmentComponent;
  let fixture: ComponentFixture<SubstanceAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubstanceAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstanceAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
