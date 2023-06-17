import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedCareOrgComponent } from './managed-care-org.component';

describe('ManagedCareOrgComponent', () => {
  let component: ManagedCareOrgComponent;
  let fixture: ComponentFixture<ManagedCareOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagedCareOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedCareOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
