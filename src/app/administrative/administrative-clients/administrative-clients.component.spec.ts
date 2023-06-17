import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeClientsComponent } from './administrative-clients.component';

describe('AdministrativeClientsComponent', () => {
  let component: AdministrativeClientsComponent;
  let fixture: ComponentFixture<AdministrativeClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrativeClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
