import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsmTreatmentComponent } from './csm-treatment.component';

describe('CsmTreatmentComponent', () => {
  let component: CsmTreatmentComponent;
  let fixture: ComponentFixture<CsmTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsmTreatmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsmTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
