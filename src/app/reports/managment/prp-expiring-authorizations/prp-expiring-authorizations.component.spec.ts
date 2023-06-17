import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrpExpiringAuthorizationsComponent } from './prp-expiring-authorizations.component';

describe('PrpExpiringAuthorizationsComponent', () => {
  let component: PrpExpiringAuthorizationsComponent;
  let fixture: ComponentFixture<PrpExpiringAuthorizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrpExpiringAuthorizationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrpExpiringAuthorizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
