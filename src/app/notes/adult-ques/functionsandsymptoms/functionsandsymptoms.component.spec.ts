import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionsandsymptomsComponent } from './functionsandsymptoms.component';

describe('FunctionsandsymptomsComponent', () => {
  let component: FunctionsandsymptomsComponent;
  let fixture: ComponentFixture<FunctionsandsymptomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionsandsymptomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionsandsymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
