import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCrisisAssessmentComponent } from './mobile-crisis-assessment.component';

describe('MobileCrisisAssessmentComponent', () => {
  let component: MobileCrisisAssessmentComponent;
  let fixture: ComponentFixture<MobileCrisisAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCrisisAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCrisisAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
