import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeIncorectLoginTracksComponent } from './administrative-incorect-login-tracks.component';

describe('AdministrativeIncorectLoginTracksComponent', () => {
  let component: AdministrativeIncorectLoginTracksComponent;
  let fixture: ComponentFixture<AdministrativeIncorectLoginTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrativeIncorectLoginTracksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeIncorectLoginTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
