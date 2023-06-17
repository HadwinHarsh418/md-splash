import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychosocialAssessmentComponent } from './psychosocial-assessment.component';

describe('PsychosocialAssessmentComponent', () => {
  let component: PsychosocialAssessmentComponent;
  let fixture: ComponentFixture<PsychosocialAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychosocialAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychosocialAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
