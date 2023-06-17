import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IopExpiringAuthorizationsComponent } from './iop-expiring-authorizations.component';

describe('IopExpiringAuthorizationsComponent', () => {
  let component: IopExpiringAuthorizationsComponent;
  let fixture: ComponentFixture<IopExpiringAuthorizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IopExpiringAuthorizationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IopExpiringAuthorizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
