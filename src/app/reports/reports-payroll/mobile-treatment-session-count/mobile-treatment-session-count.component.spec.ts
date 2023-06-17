import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTreatmentSessionCountComponent } from './mobile-treatment-session-count.component';

describe('MobileTreatmentSessionCountComponent', () => {
  let component: MobileTreatmentSessionCountComponent;
  let fixture: ComponentFixture<MobileTreatmentSessionCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTreatmentSessionCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTreatmentSessionCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
