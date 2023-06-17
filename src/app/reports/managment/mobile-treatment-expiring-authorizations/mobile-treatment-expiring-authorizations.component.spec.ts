import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTreatmentExpiringAuthorizationsComponent } from './mobile-treatment-expiring-authorizations.component';

describe('MobileTreatmentExpiringAuthorizationsComponent', () => {
  let component: MobileTreatmentExpiringAuthorizationsComponent;
  let fixture: ComponentFixture<MobileTreatmentExpiringAuthorizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTreatmentExpiringAuthorizationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTreatmentExpiringAuthorizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
