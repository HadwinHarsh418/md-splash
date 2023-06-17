import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuationServicesReferralComponent } from './continuation-services-referral.component';

describe('ContinuationServicesReferralComponent', () => {
  let component: ContinuationServicesReferralComponent;
  let fixture: ComponentFixture<ContinuationServicesReferralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinuationServicesReferralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuationServicesReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
