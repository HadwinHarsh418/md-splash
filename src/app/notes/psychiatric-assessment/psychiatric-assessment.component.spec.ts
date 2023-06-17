import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychiatricAssessmentComponent } from './psychiatric-assessment.component';

describe('PsychiatricAssessmentComponent', () => {
  let component: PsychiatricAssessmentComponent;
  let fixture: ComponentFixture<PsychiatricAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychiatricAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychiatricAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
