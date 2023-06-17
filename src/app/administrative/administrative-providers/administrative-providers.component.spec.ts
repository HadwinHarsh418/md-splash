import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeProvidersComponent } from './administrative-providers.component';

describe('AdministrativeProvidersComponent', () => {
  let component: AdministrativeProvidersComponent;
  let fixture: ComponentFixture<AdministrativeProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrativeProvidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
