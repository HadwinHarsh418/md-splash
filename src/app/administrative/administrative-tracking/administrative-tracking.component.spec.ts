import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeTrackingComponent } from './administrative-tracking.component';

describe('AdministrativeTrackingComponent', () => {
  let component: AdministrativeTrackingComponent;
  let fixture: ComponentFixture<AdministrativeTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrativeTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
