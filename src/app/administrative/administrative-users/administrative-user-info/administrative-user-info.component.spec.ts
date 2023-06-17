import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeUserInfoComponent } from './administrative-user-info.component';

describe('AdministrativeUserInfoComponent', () => {
  let component: AdministrativeUserInfoComponent;
  let fixture: ComponentFixture<AdministrativeUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrativeUserInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
