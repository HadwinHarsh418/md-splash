import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialClinicalComponent } from './initial-clinical.component';

describe('InitialClinicalComponent', () => {
  let component: InitialClinicalComponent;
  let fixture: ComponentFixture<InitialClinicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialClinicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialClinicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
