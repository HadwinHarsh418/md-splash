import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeClientsInfoComponent } from './administrative-clients-info.component';

describe('AdministrativeClientsInfoComponent', () => {
  let component: AdministrativeClientsInfoComponent;
  let fixture: ComponentFixture<AdministrativeClientsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrativeClientsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeClientsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
