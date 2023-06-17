import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingIopPlanComponent } from './upcoming-iop-plan.component';

describe('UpcomingIopPlanComponent', () => {
  let component: UpcomingIopPlanComponent;
  let fixture: ComponentFixture<UpcomingIopPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingIopPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingIopPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
