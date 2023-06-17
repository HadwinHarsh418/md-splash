import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiringAssessmentsComponent } from './expiring-assessments.component';

describe('ExpiringAssessmentsComponent', () => {
  let component: ExpiringAssessmentsComponent;
  let fixture: ComponentFixture<ExpiringAssessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpiringAssessmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiringAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
