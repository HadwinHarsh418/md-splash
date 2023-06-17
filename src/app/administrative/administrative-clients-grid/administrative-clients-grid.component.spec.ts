import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeClientsGridComponent } from './administrative-clients-grid.component';

describe('AdministrativeClientsGridComponent', () => {
  let component: AdministrativeClientsGridComponent;
  let fixture: ComponentFixture<AdministrativeClientsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrativeClientsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeClientsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
