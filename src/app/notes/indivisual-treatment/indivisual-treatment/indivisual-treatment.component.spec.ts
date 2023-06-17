import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivisualTreatmentComponent } from './indivisual-treatment.component';

describe('IndivisualTreatmentComponent', () => {
  let component: IndivisualTreatmentComponent;
  let fixture: ComponentFixture<IndivisualTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndivisualTreatmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndivisualTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
