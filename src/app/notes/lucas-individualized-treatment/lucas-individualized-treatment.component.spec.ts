import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucasIndividualizedTreatmentComponent } from './lucas-individualized-treatment.component';

describe('LucasIndividualizedTreatmentComponent', () => {
  let component: LucasIndividualizedTreatmentComponent;
  let fixture: ComponentFixture<LucasIndividualizedTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LucasIndividualizedTreatmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LucasIndividualizedTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
