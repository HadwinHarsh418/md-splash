import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargedFormsComponent } from './discharged-forms.component';

describe('DischargedFormsComponent', () => {
  let component: DischargedFormsComponent;
  let fixture: ComponentFixture<DischargedFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DischargedFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargedFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
