import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiringAuthorizationsComponent } from './expiring-authorizations.component';

describe('ExpiringAuthorizationsComponent', () => {
  let component: ExpiringAuthorizationsComponent;
  let fixture: ComponentFixture<ExpiringAuthorizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpiringAuthorizationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiringAuthorizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
