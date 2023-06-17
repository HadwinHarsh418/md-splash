import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralsSummaryComponent } from './referrals-summary.component';

describe('ReferralsSummaryComponent', () => {
  let component: ReferralsSummaryComponent;
  let fixture: ComponentFixture<ReferralsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralsSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
