import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyLivingActivitiesComponent } from './daily-living-activities.component';

describe('DailyLivingActivitiesComponent', () => {
  let component: DailyLivingActivitiesComponent;
  let fixture: ComponentFixture<DailyLivingActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyLivingActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyLivingActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
