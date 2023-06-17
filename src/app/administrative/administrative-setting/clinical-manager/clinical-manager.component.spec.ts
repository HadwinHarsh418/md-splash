import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalManagerComponent } from './clinical-manager.component';

describe('ClinicalManagerComponent', () => {
  let component: ClinicalManagerComponent;
  let fixture: ComponentFixture<ClinicalManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicalManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
