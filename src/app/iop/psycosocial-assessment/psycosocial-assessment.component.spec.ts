import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsycosocialAssessmentComponent } from './psycosocial-assessment.component';

describe('PsycosocialAssessmentComponent', () => {
  let component: PsycosocialAssessmentComponent;
  let fixture: ComponentFixture<PsycosocialAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsycosocialAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsycosocialAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
