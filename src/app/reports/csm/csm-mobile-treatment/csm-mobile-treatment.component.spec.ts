import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsmMobileTreatmentComponent } from './csm-mobile-treatment.component';

describe('CsmMobileTreatmentComponent', () => {
  let component: CsmMobileTreatmentComponent;
  let fixture: ComponentFixture<CsmMobileTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsmMobileTreatmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsmMobileTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
