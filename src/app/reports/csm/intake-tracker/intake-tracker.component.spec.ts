import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeTrackerComponent } from './intake-tracker.component';

describe('IntakeTrackerComponent', () => {
  let component: IntakeTrackerComponent;
  let fixture: ComponentFixture<IntakeTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntakeTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
