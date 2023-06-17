import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialElectronicComponent } from './initial-electronic.component';

describe('InitialElectronicComponent', () => {
  let component: InitialElectronicComponent;
  let fixture: ComponentFixture<InitialElectronicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialElectronicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialElectronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
