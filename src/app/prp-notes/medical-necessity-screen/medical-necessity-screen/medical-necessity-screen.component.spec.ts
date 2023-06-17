import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalNecessityScreenComponent } from './medical-necessity-screen.component';

describe('MedicalNecessityScreenComponent', () => {
  let component: MedicalNecessityScreenComponent;
  let fixture: ComponentFixture<MedicalNecessityScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalNecessityScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalNecessityScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
