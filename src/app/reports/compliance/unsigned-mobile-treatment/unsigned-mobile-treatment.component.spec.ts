import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsignedMobileTreatmentComponent } from './unsigned-mobile-treatment.component';

describe('UnsignedMobileTreatmentComponent', () => {
  let component: UnsignedMobileTreatmentComponent;
  let fixture: ComponentFixture<UnsignedMobileTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsignedMobileTreatmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsignedMobileTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
