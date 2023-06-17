import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTreatmentComponent } from './mobile-treatment.component';

describe('MobileTreatmentComponent', () => {
  let component: MobileTreatmentComponent;
  let fixture: ComponentFixture<MobileTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTreatmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
