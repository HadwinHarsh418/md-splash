import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychiatricSymptomsComponent } from './psychiatric-symptoms.component';

describe('PsychiatricSymptomsComponent', () => {
  let component: PsychiatricSymptomsComponent;
  let fixture: ComponentFixture<PsychiatricSymptomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychiatricSymptomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychiatricSymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
