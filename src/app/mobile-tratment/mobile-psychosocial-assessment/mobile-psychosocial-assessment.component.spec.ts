import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePsychosocialAssessmentComponent } from './mobile-psychosocial-assessment.component';

describe('MobilePsychosocialAssessmentComponent', () => {
  let component: MobilePsychosocialAssessmentComponent;
  let fixture: ComponentFixture<MobilePsychosocialAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilePsychosocialAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePsychosocialAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
