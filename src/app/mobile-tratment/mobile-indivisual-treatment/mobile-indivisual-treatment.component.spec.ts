import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileIndivisualTreatmentComponent } from './mobile-indivisual-treatment.component';

describe('MobileIndivisualTreatmentComponent', () => {
  let component: MobileIndivisualTreatmentComponent;
  let fixture: ComponentFixture<MobileIndivisualTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileIndivisualTreatmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileIndivisualTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
