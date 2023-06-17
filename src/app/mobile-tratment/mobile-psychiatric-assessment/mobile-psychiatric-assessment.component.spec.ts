import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePsychiatricAssessmentComponent } from './mobile-psychiatric-assessment.component';

describe('MobilePsychiatricAssessmentComponent', () => {
  let component: MobilePsychiatricAssessmentComponent;
  let fixture: ComponentFixture<MobilePsychiatricAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilePsychiatricAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePsychiatricAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
