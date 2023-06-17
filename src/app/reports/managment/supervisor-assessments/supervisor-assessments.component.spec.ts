import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorAssessmentsComponent } from './supervisor-assessments.component';

describe('SupervisorAssessmentsComponent', () => {
  let component: SupervisorAssessmentsComponent;
  let fixture: ComponentFixture<SupervisorAssessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorAssessmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
