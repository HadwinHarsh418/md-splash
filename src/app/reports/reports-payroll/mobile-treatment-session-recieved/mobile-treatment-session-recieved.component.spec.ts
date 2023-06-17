import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTreatmentSessionRecievedComponent } from './mobile-treatment-session-recieved.component';

describe('MobileTreatmentSessionRecievedComponent', () => {
  let component: MobileTreatmentSessionRecievedComponent;
  let fixture: ComponentFixture<MobileTreatmentSessionRecievedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTreatmentSessionRecievedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTreatmentSessionRecievedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
