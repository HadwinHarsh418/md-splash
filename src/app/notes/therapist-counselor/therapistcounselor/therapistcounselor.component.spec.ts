import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistcounselorComponent } from './therapistcounselor.component';

describe('TherapistcounselorComponent', () => {
  let component: TherapistcounselorComponent;
  let fixture: ComponentFixture<TherapistcounselorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapistcounselorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistcounselorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
