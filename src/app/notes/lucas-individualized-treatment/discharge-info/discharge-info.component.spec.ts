import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargeInfoComponent } from './discharge-info.component';

describe('DischargeInfoComponent', () => {
  let component: DischargeInfoComponent;
  let fixture: ComponentFixture<DischargeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DischargeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
