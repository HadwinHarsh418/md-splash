import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImindreferralComponent } from './imindreferral.component';

describe('ImindreferralComponent', () => {
  let component: ImindreferralComponent;
  let fixture: ComponentFixture<ImindreferralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImindreferralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImindreferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
