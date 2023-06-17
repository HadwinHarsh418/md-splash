import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialElectronicDataComponent } from './initial-electronic-data.component';

describe('InitialElectronicDataComponent', () => {
  let component: InitialElectronicDataComponent;
  let fixture: ComponentFixture<InitialElectronicDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialElectronicDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialElectronicDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
