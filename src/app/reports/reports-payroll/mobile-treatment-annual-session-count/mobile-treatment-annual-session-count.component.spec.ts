import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTreatmentAnnualSessionCountComponent } from './mobile-treatment-annual-session-count.component';

describe('MobileTreatmentAnnualSessionCountComponent', () => {
  let component: MobileTreatmentAnnualSessionCountComponent;
  let fixture: ComponentFixture<MobileTreatmentAnnualSessionCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTreatmentAnnualSessionCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTreatmentAnnualSessionCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
