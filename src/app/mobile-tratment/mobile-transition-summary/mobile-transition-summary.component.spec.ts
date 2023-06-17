import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTransitionSummaryComponent } from './mobile-transition-summary.component';

describe('MobileTransitionSummaryComponent', () => {
  let component: MobileTransitionSummaryComponent;
  let fixture: ComponentFixture<MobileTransitionSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTransitionSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTransitionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
