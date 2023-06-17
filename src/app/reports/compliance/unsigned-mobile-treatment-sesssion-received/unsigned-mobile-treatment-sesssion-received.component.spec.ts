import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsignedMobileTreatmentSesssionReceivedComponent } from './unsigned-mobile-treatment-sesssion-received.component';

describe('UnsignedMobileTreatmentSesssionReceivedComponent', () => {
  let component: UnsignedMobileTreatmentSesssionReceivedComponent;
  let fixture: ComponentFixture<UnsignedMobileTreatmentSesssionReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsignedMobileTreatmentSesssionReceivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsignedMobileTreatmentSesssionReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
