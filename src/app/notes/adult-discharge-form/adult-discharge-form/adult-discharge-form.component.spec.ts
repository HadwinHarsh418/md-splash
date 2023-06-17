import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultDischargeFormComponent } from './adult-discharge-form.component';

describe('AdultDischargeFormComponent', () => {
  let component: AdultDischargeFormComponent;
  let fixture: ComponentFixture<AdultDischargeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdultDischargeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultDischargeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
