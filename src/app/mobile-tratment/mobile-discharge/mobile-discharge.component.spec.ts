import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDischargeComponent } from './mobile-discharge.component';

describe('MobileDischargeComponent', () => {
  let component: MobileDischargeComponent;
  let fixture: ComponentFixture<MobileDischargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileDischargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDischargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
